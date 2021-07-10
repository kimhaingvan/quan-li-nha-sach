import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {BookService} from "../../../../states/book-store/book.service";
import {BookQuery} from "../../../../states/book-store/book.query";
import {ApiBookService} from "../../../../API/api-book.service";
import {addDays, formatDistance} from "date-fns";
import {AccountQuery} from "../../../../states/account-store/account.query";
import { ModalController } from 'src/app/core/modal-controller/modal-controller.service';
import { CompareBookModalComponent } from './components/compare-book-modal/compare-book-modal.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  cate_books: [];
  stars: number[] = [1, 2, 3, 4, 5];
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());
  submitting = false;
  inputValue = '';
  comments = [
    {
      author: 'Khách hàng',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      distanceTime: formatDistance(new Date(), addDays(new Date(), 1)),
      create_at: new Date()
    },
  ]
  user = {
    author: 'Khách hàng',
    avatar: 'assets/images/default-avatar.png'
  };
  data = [
    {
      author: 'Khách hàng',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    }
  ];
  book_id;
  detailBook$ = this.bookQuery.detail_book$
  quantity = 1;
  selectedStar: number;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private bookQuery: BookQuery,
    private apiBookService: ApiBookService,
    private accountQuery: AccountQuery,
    private router: Router,
    private modalController: ModalController,
  ) {}

  async ngOnInit() {
    const req = {
      book_id: parseInt(this.route.snapshot.params['id'])
    }
    this.book_id = req.book_id;
    let detail_book = await this.bookService.getBookByID(req);
    detail_book.rate_star = Math.ceil(detail_book.rate_star)
    await  this.apiBookService.getComments({
      book_id: this.book_id
    }).then(cmts => {
      this.comments = this.comments.concat(cmts)
      this.comments.forEach(cmt => cmt.distanceTime = formatDistance(new Date(), addDays(new Date(), 1)));
      detail_book.comments = cmts
    })
    this.bookService.setDetailBook(detail_book);


    await this.apiBookService.GetBooks({
      page: 1,
      per_page: 4,
    }).then(res => {
      this.cate_books = res?.items;
    });


  }

  IncreaseQuantity() {
    if (this.quantity >= this.bookQuery.getValue().detail_book.new_amount) {
      return toastr.error('Số lượng hàng tồn kho không đủ!');
    }
    this.quantity += 1;
  }

  DecreaseQuantity() {
    if (this.quantity == 0) {
      return;
    }
    this.quantity -= 1;
  }

  ChangeQuantity(order_line) {
    this.quantity = this.quantity < 0 ? Math.abs(this.quantity) : this.quantity;
  }

  addToChart() {
    if (this.quantity == 0) {
      return toastr.error("Vui lòng chọn số lượng sản phẩm")
    }
    let order_details = [];
    order_details = JSON.parse(localStorage.getItem("order_details")) || []
    const found_book = order_details.find(chart_book => chart_book?.book?.book_id == this.bookQuery.getValue().detail_book.book_id)

    if (found_book) {
      order_details.forEach(detail => {
        if (detail?.book?.book_id == this.bookQuery.getValue().detail_book.book_id) {
          detail.quantity += this.quantity
        }
      })
      localStorage.setItem("order_details", JSON.stringify(order_details))
      toastr.success("Thêm sản phẩm vào giỏ hàng thành công")
      return;
    }
    order_details.push({
      book: this.bookQuery.getValue().detail_book,
      quantity: this.quantity
    });
    localStorage.setItem("order_details", JSON.stringify(order_details))
    toastr.success("Thêm sản phẩm vào giỏ hàng thành công")
  }

  countStar(star) {
    this.selectedStar = star;
  }

  async rateStar() {
    if (!localStorage.getItem("auth_info")) {
      return toastr.error("Vui lòng đăng nhập để đánh giá sảm phẩm")
    }
    if (!this.selectedStar) {
      return toastr.error("Vui lòng chọn sao cho sản phẩm")
    }

    const req = {
      id: this.book_id,
      star: this.selectedStar
    }

    const res = await this.apiBookService.rateStar(req)
    toastr.success("Đánh giá sản phẩm thành công")
    this.selectedStar = 0
  }
  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  async handleSubmit() {
    const req = {
      customer_id:  this.accountQuery.getValue().auth_info?.user_info?.customer_id || 1 ,
      content: this.inputValue,
      book_id: this.book_id
    }
    await this.apiBookService.createComment(req).then(cmt=> {
      this.inputValue = "";
      console.log(cmt)
      this.comments.unshift({
        author: cmt?.customer?.customer_name,
        avatar: `${cmt?.customer?.image || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}`,
        content: cmt.content,
        distanceTime: formatDistance(new Date(cmt.create_at), addDays(new Date(), 1 )),
        create_at:cmt.create_at
      })
      toastr.success("Bạn đã bình luận thành công")
    })
  
  }

  redirectBook(book_id) {
    this.router.navigateByUrl("/book-store/detail/" + book_id)
    setTimeout(()=>{
      window.location.reload();
    }, 500  );
  }

  compare() {
    const modal = this.modalController.create({
      component: CompareBookModalComponent,
      cssClass: "modal-lg",
      componentProps: {
      },
    });
    modal.show().then();
  }
}

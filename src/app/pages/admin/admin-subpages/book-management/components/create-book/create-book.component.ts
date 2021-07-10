import { HttpService } from 'src/app/services/http.service';
import { ModalController } from './../../../../../../core/modal-controller/modal-controller.service';
import { BookStore } from '../../../../../../states/product-store/book.store';
import { ApiCategoryService } from './../../../../../../API/api-book-category.service';
import { ProductService } from 'src/app/states/product-store/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookQuery } from 'src/app/states/product-store/book.query';
import { AddAuthorModalComponent } from '../add-author-modal/add-author-modal.component';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { AddSupplierModalComponent } from '../add-supplier-modal/add-supplier-modal.component';
import { ApiAppService } from 'src/app/API/api-app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  filter = {
    page : 1,
    perPage : 1000
  };

  createBookForm = this.fb.group({
    name: [''],
    author: [''],
    supplier: [''],
    category: [''],
    material: [''],
    size: [''],
    origin: [''],
    feature: [''],
    brandName: [''],
    costPrice: [''],
    retailPrice: [''],
    discount: [''],
    amount: [''],
    description: [''],
    note: [''],
    imageUrl: ''
  });

  baseURL = '';

  authors$ = this.bookQuery.authors$;
  categories$ = this.bookQuery.categories$;
  suppliers$ = this.bookQuery.suppliers$;

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private bookService: ProductService,
    private bookStore: BookStore,
    private bookQuery: BookQuery,
    private modalController: ModalController,
    private apiAppService: ApiAppService,
    private http: HttpClient
    ) {
      this.baseURL = this.apiAppService.baseURL;
     }

  async ngOnInit() {
    await this.SetupData();
  }
  async onCreateUser() {
    // const newReader = {...this.reader};
    // const res = await this.readerService.createReader(newReader);
    // if(res.success) {
    //   toastr.success("Bạn đã tạo mới đọc giả thành công!", "Đăng ký thành công");
    //   this.router.navigateByUrl('/admin/user-management/user-list');
    // } else {
    //   toastr.error("Vui lòng thực hiện lại thao tác!", "Đăng ký thất bại");
    // }
  }

  async SetupData() {
    // await this.bookService.GetAuthors(this.filter);
    await this.bookService.GetCategories({});
    // await this.bookService.GetSuppliers(this.filter);
  }

  ResetDataForm() {
    this.createBookForm.patchValue({
      'name': '',
      'author': '',
      'supplier': '',
      'category': '',
      'page_number': '',
      'costPrice': '',
      'retailPrice': '',
      'size': '',
      'material': '',
      'origin': '',
      'brandName': '',
      'feature': '',
      'discount': '',
      'description': '',
      'amount':'',
      'note': '',
    });
  }

  async CreateBook() {
    let book_data = this.createBookForm.value;
    if(!book_data.name || !book_data.category || !book_data.costPrice || !book_data.retailPrice ) {
      toastr.error("Tạo mới sản phẩm thất bại.", "Vui lòng nhập đầy đủ thông tin sản phẩm.")
      return;
    }
    try {
      let book_req = {
        ...book_data,
        categoryId: book_data.category.id,
        // supplier_id: book_data.supplier.supplier_id,
        // author_id: book_data.author.author_id,
      }
      let created_book = await this.bookService.CreateBook(book_req)
      this.router.navigateByUrl(`/admin/book-management/book-detail/${created_book.id}`);
      toastr.success("Tạo mới sản phẩm thành công.");
    } catch(e) {
      toastr.error("Tạo mới sản phẩm thất bại", e.msg || e.message)
    }
  }

  goBack() {
    this.router.navigateByUrl('admin/book-management/book-list')
  }

  OpenAddAuthorModal() {
    const modal = this.modalController.create({
      component: AddAuthorModalComponent,
      componentProps: {
      },
    });
    modal.show().then();
    modal.onDismiss().then(async author =>  {
      if(author) {
        try {
          await this.bookService.CreateAuthor(author);
          await this.bookService.GetAuthors(this.filter);
          toastr.success("Thêm mới tác giả thành công.")
        } catch(e) {
          toastr.error("Thêm mới tác giả thất bại.", e.msg || e.message)
        }

      }
    });
  }

  OpenAddCategoryModal() {
    // let createBookForm = this.createBookForm.value;
    const modal = this.modalController.create({
      component: AddCategoryModalComponent,
      cssClass: 'modal-lg',
      componentProps: {
      },
    });
    modal.show().then();
    modal.onDismiss().then(async category =>  {
      if(category) {
        try {
          await this.bookService.CreateCategory(category);
          await this.bookService.GetCategories(this.filter);
          toastr.success("Thêm mới thể loại sản phẩm thành công.")
        } catch(e) {
          toastr.error("Thêm mới thể loại sản phẩm thất bại.", e.msg || e.message)
        }

      }
    });
  }

  OpenAddSupplierModal() {
    const modal = this.modalController.create({
      component: AddSupplierModalComponent,
      cssClass: 'modal-xl',
      componentProps: {
      },
    });
    modal.show().then();
    modal.onDismiss().then(async supplier =>  {
      if(supplier) {
        try {
          await this.bookService.CreateSupplier(supplier);
          await this.bookService.GetSuppliers(this.filter);
          toastr.success("Thêm mới nhà cung cấp thành công.")
        } catch(e) {
          toastr.error("Thêm mới nhà cung cấp thất bại.", e.msg || e.message)
        }
      }
    });
  }

  async onChangeLogo(event) {
    try{
      let fd = new FormData();
      fd.append('image', event.target.files[0], event.target.files[0].name)
      let res : any = await this.http.post('http://localhost:5000/upload-image', fd).toPromise();
      this.createBookForm.patchValue({
        image: res.image
      })
    }
    catch(e){
      toastr.error("Cập nhật ảnh thất bại!", e.msg || e.message)
    }
  }
}

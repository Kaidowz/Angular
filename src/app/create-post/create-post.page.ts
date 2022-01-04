import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

export interface imageData{
  fileName: string;
  filePath: string;
  size: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit
{
  namebh: string;
  imageURL: AngularFireUploadTask;
  desc: string;
  user: any;
  fileName: string;
  fileSize: string;
  isLoading: boolean;
  isLoaded: boolean;
  private imageCollection: AngularFirestoreCollection<imageData>;
  imageUpload: AngularFireUploadTask;

  userId: string;
  name: string;
  email: string;
  phone: string;

  constructor
  ( 
    private database: AngularFirestore,
    private storage: AngularFireStorage,
    private loading: LoadingController,
    
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ){}

  ngOnInit() 
  {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })

    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.desc = user.desc;
      this.namebh = user.namebh;
    })
  }

  async uploadImage(event){

    const load = await this.loading.create({
      message: "Uploading..",
      spinner: 'crescent',
      showBackdrop: true
    })
      load.present();

    const file = event.target.files;
    console.log(file);
    var fileName = file[0];
    console.log(fileName);

    if(fileName.type.split('/')[0] !=="image" ){
      console.error("File is not an Image");
      return;
    }

    this.isLoading = true;
    this.isLoaded = false;

    const path = `postFiles/${new Date().getTime()}_${fileName.name}`;

    var fileRef = this.storage.ref(path);

    this.imageURL = this.storage.upload(path,fileName)
    
      this.loading.dismiss();

    this.imageURL.then( res=> {
      var imagefile = res.task.snapshot.ref.getDownloadURL();
      imagefile.then(downloadableUrl => {
        console.log("URL", downloadableUrl);
        this.afs.collection('user').doc(this.userId).update({
          ImageUrl: downloadableUrl
        });
      })
    }) 


  }

  async createPost()
  {
    const loading = await this.loadingCtrl.create({
      message: 'Updating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afs.collection('user').doc(this.userId).set({
      'desc': this.desc,
      'namebh': this.namebh,
    },{merge: true})
    .then(()=> {
      loading.dismiss();
      this.toast('Create Post Success!', 'success');
      this.router.navigate(['/home']);
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  }

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });

    toast.present();
  }

}


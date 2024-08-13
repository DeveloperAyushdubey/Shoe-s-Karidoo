import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
url="http://localhost:8500"
  constructor(private http:HttpClient) { }



  // Maincategory \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
createmaincategory(data:any){
return this.http.post(this.url+"/maincategory",data)
}


getmaincategory(){
  return this.http.get(this.url + "/maincategory")
}


deletemaincategory(id:any){
  return this.http.delete(this.url+"/maincategory/"+id)
}

getsinglemaincategory(id:any){
  return this.http.get(this.url+"/maincategory/"+id)
}


updatemaincategory(data:any){
  return this.http.put(this.url+"/maincategory/"+data.id,data)
}


///Subcateggory \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

getsubcategory(){
  return this.http.get(this.url+"/subcatgeory")
}


createsubcategory(data:any){
  return this.http.post(this.url+"/subcatgeory",data)
}

updatesubcategory(data:any){
  return this.http.put(this.url+"/subcatgeory/"+data.id ,data)
}

getsinglesubcategory(id:any){
  return this.http.get(this.url+"/subcatgeory/"+id)
}

deletesubcategory(id:any){
  return this.http.delete(this.url+"/subcatgeory/"+id)
}

////////////Brand \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

getbrand(){
  return this.http.get(this.url+"/brand")
}

createbrand(data:any){
  return this.http.post(this.url+"/brand",data)
}

updatebrand(data:any){
  return this.http.put(this.url+"/brand/"+data.id,data)
}

getsinglebrand(id:any){
  return this.http.get(this.url+"/brand/"+id)
}
deletebrand(id:any){
  return this.http.delete(this.url+"/brand/"+id)
}


////////Color \\\\\\\\\\\\\\\\\\\\\\\\\\\\

getcolor(){
  return this.http.get(this.url +"/color")
}

getsinglecolor(id:any){
  return this.http.get(this.url+"/color/"+id)
}
createcolor(data:any){
  return this.http.post(this.url+"/color",data)
}

updatecolor(data:any){
  return this.http.put(this.url+"/color/"+data.id,data)
}

deletecolor(id:any){
  return this.http.delete(this.url+"/color/"+id)
}



//////// Product \\\\\\\\\\\\\\\\\\\\\\\\\\\\

getproduct(){
  return this.http.get(this.url +"/product")
}

getsingleproduct(id:any){
  return this.http.get(this.url+"/product/"+id)
}
createproduct(data:any){
  return this.http.post(this.url+"/product",data)
}

updateproduct(data:any){
  return this.http.put(this.url+"/product/"+data.id,data)
}

updateproductquntity(data:any){
  return this.http.put(this.url+"/product/"+data.id,data)
}

deleteproduct(id:any){
  return this.http.delete(this.url+"/product/"+id)
}


//////////////// User \\\\\\\\\\\\\\\\\\\\\\\

getUser(){
  return this.http.get(this.url +"/user")
}

getsingleuser(id:any){
  return this.http.get(this.url+"/user/"+id)
}
createuser(data:any){
  return this.http.post(this.url+"/user",data)
}

updateuser(data:any){
  return this.http.put(this.url+"/user/"+data.id,data)
}

deleteuser(id:any){
  return this.http.delete(this.url+"/User/"+id)
}


//////////////////////////// Cart \\\\\\\\\\\\\\\\\\\\\\\

getCart(){
  return this.http.get(this.url +"/cart")
}

getsinglecart(id:any){
  return this.http.get(this.url+"/cart/"+id)
}
createcart(data:any){
  return this.http.post(this.url+"/cart",data)
}

updatecart(data:any){
  return this.http.put(this.url+"/cart/"+data.id,data)
}

deletecart(id:any){
  return this.http.delete(this.url+"/cart/"+id)
}


//////// CheckOut \\\\\\\\\\\\\\
createcheckout(data:any){
  return this.http.post(this.url+"/checkout",data)
  }


  getcheckout(){
    return this.http.get(this.url+"/checkout")
  }




  ///////////       Admin \\\\\\\\\\\\\\\\\\\\


  createAdmin(data:any){
    return this.http.post(this.url+"/Admin",data)
  }


  updateAdmin(data:any){
    return this.http.put(this.url+"/Admin/"+data.id,data)
  }


  getAdmin(){
    return this.http.get(this.url+"/Admin")
  }

 
}

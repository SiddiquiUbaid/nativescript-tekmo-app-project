export function onPageLoaded(args) {
  console.log('Page Loaded');
   
}

export function onTap(args) {
  const obj = args.object;
  const page = obj.page;
  
  let mainPage = {
    moduleName: 'main-page',
    transition: {
      name: 'slideBottom'  //explode //fade //flipRight //flipLeft //slideLeft //slideRight //slideTop //slideBottom
    } 
  }

  page.frame.navigate(mainPage)

  console.log('going  back to main page' + page)


}

export function onAbout(args){
  const obj = args.object
  const page = obj.page
  let aboutPage = {
    moduleName: 'views/about-us/about-us', 
    transition: {
      name: 'fade'
    }
  }

  page.frame.navigate(aboutPage)
  console.log('going to about page' + page)
}

export function onContact(args){
  const obj = args.object
  const page = obj.page

  let contactPage = {
    moduleName: 'views/contact-us/contact-us',
    transition: {
      name: 'slideBottom'
    }
  }

  page.frame.navigate(contactPage)
  
}

export function onProduct(args){
  const obj = args.object
  const page = obj.page

  let productPage ={
    moduleName: 'views/products/products',
    transition: {
      name: 'flipRight'
    }
  }


  page.frame.navigate(productPage)
}


//exports.onTap = onTap;

// function onTap(args) {
//   const button = args.object;
//   const page = button.page;

  


//    console.log('trying to open home page: ' + page.frame.navigate({moduleName: 'main-page'}));
//   // page.frame.navigate('main-page');
// }

// hjjhj jhnjkhjl

function onTap(args) {
  const obj = args.object;
  const page = obj.page;

  
   console.log('trying to open home page ')
   const  homePage = {moduleName: 'views/home/home',
                      transition: { 
                        name: "explode" //explode //fade //flipRight //flipLeft //slideLeft //slideRight //slideTop //slideBottom 
                      }
                     }
   page.frame.navigate(homePage)
  
  // page.frame.navigate('main-page'); //saregampadhani

}
exports.onTap = onTap;

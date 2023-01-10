export function goHome(args){

  const obj = args.object
  const page = obj.page

  let homePage = {
    moduleName: 'views/home/home',
    transition: {
      name:  'fade'

    }

  }
  page.frame.navigate(homePage) //lihijhkkjhj



}
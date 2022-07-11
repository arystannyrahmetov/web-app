 function themeOnChange(e, action, setAction) {

     let new_theme = e.target.value
     setAction((action, new_theme) =>({
         theme: new_theme
     }))

     console.log(action)
 }

 export default {
     themeOnChange
 }
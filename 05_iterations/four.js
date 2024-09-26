const myObj = {       // for object we use for in loop
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"

}

for (const key in myObj) {
   console.log(key)
}
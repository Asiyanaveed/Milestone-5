
let Myname  : any= document.getElementById('name');
let jobTitle : any= document.getElementById('jobtitle');
let phone : any= document.getElementById('phone');
let email : any= document.getElementById('email');
let address : any= document.getElementById('address');
let passingYear1 : any= document.getElementById('passing year1');
let degree1 : any= document.getElementById('degree1');
let institute1 : any= document.getElementById('institute1');
let passingYear2 : any= document.getElementById('passing year2');
let degree2 : any= document.getElementById('degree2');
let institute2 : any= document.getElementById('institute2');
let skill1 : any= document.getElementById('skill1');
let skill2 : any= document.getElementById('skill2');
let skill3 : any= document.getElementById('skill3');
let language1 : any= document.getElementById('language1');
let language2 : any= document.getElementById('language2');
let startyear : any= document.getElementById('startyear');
let endyear : any= document.getElementById('endyear');
let company : any= document.getElementById('company');
let companylocation : any= document.getElementById('companylocation');
let jobtitle2: any= document.getElementById('jobtitle2');
let achivements1 : any= document.getElementById('achivements1');
let achivements2 : any= document.getElementById('achivements2');
let achivements3 : any= document.getElementById('achivements3');
let profilepic: any= document.getElementById('profilepic');

let submitbtn = document.getElementById('submitbtn');
let form =  document.getElementById('form');

form?.addEventListener('submit',(e)=>{
    e.preventDefault()

    localStorage.setItem('name',Myname.value)
    localStorage.setItem('jobtitle',jobTitle.value)
    localStorage.setItem('phone',phone.value)
    localStorage.setItem('email',email.value)
    localStorage.setItem('address',address.value)
    localStorage.setItem('passing year1',passingYear1.value)
    localStorage.setItem('degree1',degree1.value)
    localStorage.setItem('institute1',institute1.value)
    localStorage.setItem('passing year2',passingYear2.value)
    localStorage.setItem('degree2',degree2.value)
    localStorage.setItem('institute2',institute2.value)
    localStorage.setItem('skill1',skill1.value)
    localStorage.setItem('skill2',skill2.value)
    localStorage.setItem('skill3',skill3.value)
    localStorage.setItem('language1',language1.value)
    localStorage.setItem('language2',language2.value)
    localStorage.setItem('startyear',startyear.value)
    localStorage.setItem('endyear',endyear.value)
    localStorage.setItem('company',company.value)
    localStorage.setItem('companylocation',companylocation.value)
    localStorage.setItem('jobtitle2',jobtitle2.value)
    localStorage.setItem('achivements1',achivements1.value)
    localStorage.setItem('achivements2',achivements2.value)
    localStorage.setItem('achivements3',achivements3.value)

    if(profilepic.files &&  profilepic.files[0]){
     let reader = new FileReader()
     reader.addEventListener('load',()=>{
        let textImg:any =  reader.result

        localStorage.setItem('profilepic',textImg)
     })
     reader.readAsDataURL(profilepic.files[0])
    }
     window.location.href="./milestones/resume.html"
})




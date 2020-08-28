$(function () {
    //登录功能
    $(".submit").click(async function (e) {
        let account = $(".userName").val().trim();
        let password = $(".userPass").val().trim();
        if (account === "" || password === "") {
            alert("账号密码不能为空");
            return;
        }
        password = md5(password);
        console.log(account, password)
        //发起ajax请求
        /* axios.post("/user/login",{
            account,
            password
        }).then(value=>{
            console.log(value)
        }).catch(err=>{
            console.log(err)
        }) */

        //
       /*  try{
           
        }catch(e){
            console.log(e);
        } */
        let res=await axios.post("/user/login",{account,password})
        //console.log(res)
        if(parseInt(res.code)===0){
            alert("登陆成功")
            window.location.href="index.html"
            return;
        }
        alert("用户名密码出错")
    })
})
import{r as i,h as o}from"./p-c0299936.js";const t=class{constructor(o){i(this,o),this.email="",this.open=!0,this.handleClose=()=>{this.open=!1},this.handleCheckEmail=()=>{/@gmail\.com$/i.test(this.email)?window.open("https://mail.google.com/"):/^[^@]+@(yahoo|ymail|rocketmail)\.(com|in|co\.uk)$/i.test(this.email)?window.open("https://mail.yahoo.com/"):/@aol\.com$/i.test(this.email)?window.open("https://mail.aol.com/"):/^[^@]+@(hotmail|live|outlook)\.com$/i.test(this.email)?window.open("https://outlook.live.com/mail/0/inbox"):/@comcast\.net$/i.test(this.email)&&window.open("https://xfinityconnect.mail.comcast.net/"),this.handleClose()}}render(){return o("div",{class:this.open?"modal is-active":"modal"},o("div",{onClick:this.handleClose,class:"modal-background"}),o("div",{class:"modal-body"},o("div",{class:"title"},"Verify Your Email Address"),o("div",{class:"subtitle"},"We sent an email to ",o("span",null,this.email),". Simply click the confirmation link in your email."),o("div",{class:"btn-wrap"},o("div",{class:"btn",onClick:this.handleCheckEmail},"Check My Email")),o("div",{class:"hr"}),o("div",{class:"tip"},"Tip: Check your spam folder if you do not see our email.")))}};t.style=":host{display:block}.modal{display:none;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40;bottom:0;left:0;right:0;top:0}.modal.is-active{display:-ms-flexbox;display:flex}.modal-background{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgb(33, 33, 33);opacity:0.46}.modal-body{position:relative;padding:20px 8px;margin:0 auto;width:350px;background-color:#fff;-webkit-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);border-radius:10px}.title{font-family:Noto Sans;font-style:normal;font-weight:600;font-size:16px;line-height:21px;text-align:center;letter-spacing:-0.32px;color:#000000}.subtitle{margin-top:12px;padding:0 20px;font-family:Noto Sans;font-style:normal;font-weight:normal;font-size:11px;line-height:13px;letter-spacing:0.066px;color:#59575c}.subtitle span{color:#0088ff}.btn-wrap{text-align:center}.btn{margin-top:26px;margin-bottom:14px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:111px;height:32px;background:#f96302;-webkit-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);border-radius:15px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#ffffff;text-decoration:none;cursor:pointer}.hr{display:block;-ms-flex:1 1 0px;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;-webkit-transition:inherit;transition:inherit;border-color:#e0e0e0}.tip{margin-top:12px;padding:0 20px;font-family:Noto Sans;font-style:normal;font-weight:normal;font-size:11px;line-height:13px;letter-spacing:0.066px;color:#59575c}";export{t as verification_email_popup}
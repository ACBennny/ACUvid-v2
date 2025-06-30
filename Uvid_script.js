/*************************************************************
 * This is the script for the homepage of Uvid
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/










// After the preloader is gone , this will cmd the sign-in /sign up form to appear

let cover = document.querySelector('.cover');
let regb4 = document.querySelector('.reg-bf');


function opengates() {
    cover.style.display = "none";
    regb4.style.visibility = "visible";
    regb4.style.top = "7.5%";
    regb4.style.left = "5%";
    regb4.style.width = "90%";
    regb4.style.height = "85%";
}








// This contains all code related to the sign-in/sign-up fornm


        //This function enables the user to toggle between the sign in and sign up form
        let logn = document.querySelector('.log');
        let sgnn = document.querySelector('.sgn');
        let regBehind = document.querySelector('.prmptlog');
        let lsb = document.querySelector('.lsbut');
        let frm = document.querySelector('.fbx');
        let sgnh2 = lsb.getElementsByTagName('label')[0];
        let logh2 = lsb.getElementsByTagName('label')[1];

        // to toggle tosign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnh2.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(0px)";
        });

        logh2.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(-350px)";
        });

        // to toggle to sign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnn.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(0px)";
        });

        logn.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
        });





    // This slides to the sign in form so user can sign in

        // if and ONLY if certain conditions are met. They are;
        /* 
            1.  Username must be minimun of '5' characters but 
                not more than '20' characters
            2.  Password must be minimun of '8' characters but 
                not more than '100' characters
            3.  User must make sure password is the same for "Confirm password"
            4.  User must have a valid email (this will not be tested atm) 
        */


    // CREATING ACCOUNT (SIGN UP)

        // Turns off autocomplete
        const allInputFields = document.querySelectorAll('.form_section input');
        allInputFields.forEach(inputField => {
            inputField.autocomplete = "off";
        });
    

        // Validates Input for Username

            // Conditions -
            /**
             *  1 - Contains Only LETTERS and NUMBERS and ONE underscore
             *  2 - Cannot contain only numbers
             *  3 - Can ONLY start/end with a a letter NOT numbers or underscore
             */


            // Validation function For "Username"

            const userName_Condition = new RegExp("^[a-zA-Z0-9_]*$");
            let userArray = [];
            const userName = document.querySelector("#uname");
            const newUserWarn = document.querySelector(".newUser_warn");

            // Sepcifies the allowed characters for Before input
            userName.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(userName_Condition).test(event.data))
                event.preventDefault();
            });
                
                let isUserValid = false;
            
                function validateUsername(event){
                    userArray.push(uname.value);
                    let lastCurArrayVal = userArray.at(-1);

                    let userNameCond_letter = /^[A-Z a-z]/g;
                    let userNameCond_num = /\d/g;
                    let userScrCond = /(^_|_$)/gi;
                    let tempArray = userArray;
                    let lastTempArrayVal = tempArray.at(-1);
                    let unScr = lastTempArrayVal.replace(/[^_]/g, "");

                    // Checks if username starts/ends with an underscore
                    if((lastCurArrayVal.match(userScrCond)))
                    {
                        newUserWarn.textContent = "Username can NOT start/end with an underscore";
                        isUserValid = false;
                    }
                    //Checks if username has more than "one" underscore
                    else if(unScr.length > 1)
                    {
                        newUserWarn.textContent = "Username can ONLY have ONE underscore";
                        isUserValid = false;
                    }
                    // Checks if username contains only numbers and starts with a number
                    else if(!(lastCurArrayVal.match(userNameCond_letter)) && (lastCurArrayVal.match(userNameCond_num)))
                    {
                        newUserWarn.textContent = "Username can NOT start with a number or contain only numbers";
                        isUserValid = false;
                    }
                    // Checks if username is between "5" and "20" characters
                    else if(((lastCurArrayVal.length > 0) && (lastCurArrayVal.length < 5)) || (lastCurArrayVal.length > 20))
                    {
                        newUserWarn.textContent = "Username length must be \"5\" min and \"20\" max";
                        isUserValid = false;
                    }
                    else if((event.data == null) && (lastCurArrayVal.length <= 0))
                    {
                        newUserWarn.textContent = "Required";
                        isUserValid = false;
                    }
                    else
                    {
                        newUserWarn.textContent = "";
                        isUserValid = true;
                        console.log("User bool = " + isUserValid);
                    }

                    
                }

                userName.addEventListener("input" , validateUsername);
                

        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */

            // Allows all except spaces
            const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

            let passwordArray = [];
            const newPassword = document.querySelector("#upass");
            const newPassWarn = document.querySelector(".newPass_warn");
            let isPassValid = false;

            // Sepcifies the allowed characters for Before input
            newPassword.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Validation for Password

                function validateNewPassword(event) {
                    passwordArray.push(upass.value);
                    let lastPassArrayVal = passwordArray.at(-1);
                    const userPass_Cond_SpecialChar = /\W/g;
                    const userPass_Cond_num = /\d/g;
                    const userPass_Cond_Lett = /[A-Z a-z]/g;

                    // Checks if there is any value int the input feild
                    if(((event.data == null) && (upass.length <= 0)))
                    {
                        newPassWarn.textContent = "Required";
                        isPassValid = false;
                    }
                    // Checks if the pattern is less "8" characters and above than "100" characters
                    else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                    {
                        newPassWarn.textContent = "Password length must be \"8\" min and \"100\" max";
                        isPassValid = false;
                    }
                    // Checks if the input fits the specified pattern
                    else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                        && lastPassArrayVal.match(userPass_Cond_Lett)
                        && lastPassArrayVal.match(userPass_Cond_num)
                    ))
                    {
                        newPassWarn.textContent = "Password must contain at least one of a letter, number, and a special character";
                        isPassValid = false;
                    }
                    // If all checks are completed then it is accepted
                    else
                    {
                        newPassWarn.textContent = "";
                        isPassValid = true;
                        console.log("Pass bool = " + isPassValid);
                    }
                }

                newPassword.addEventListener("input" , validateNewPassword);

            // Validation for Confirm Password
                const confirmPassword = document.querySelector("#ucfmpass");
                const confNewPassWarn = document.querySelector(".confNewPass_warn");
                let confPasswordArray = [];
                let isConfPassValid = false;

                confirmPassword.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(new_pass_cond).test(event.data))
                    event.preventDefault();
                });

                    function confirmNewPass(event){
                        confPasswordArray.push(ucfmpass.value);
                        let lastConfPassArrayVal = confPasswordArray.at(-1);

                        if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                        {
                            confNewPassWarn.textContent = "Required";
                            isConfPassValid = false;
                        }
                        else if( lastConfPassArrayVal != upass.value)
                        {
                            confNewPassWarn.textContent = "Passwords do not match";
                            isConfPassValid = false;
                        }
                        else
                        {
                            confNewPassWarn.textContent = "";
                            isConfPassValid = true;
                            console.log("ConfPass bool = " + isConfPassValid);
                        }
                    }

                confirmPassword.addEventListener("input" , confirmNewPass);


        // Validates Input for Email
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Will be verified before account can be created
             *  3 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */

            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let emailArray = [];
            const newEmail = document.querySelector("#umail");
            const newEmailWarn = document.querySelector(".newEmail_warn");
            let isEmailValid = false;

            newEmail.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Email"
                function validateNewEmail(event){
                    emailArray.push(umail.value);
                    let lastEmailArrayval = emailArray.at(-1);

                    let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // Checks if the field is empty
                    if((event.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        newEmailWarn.textContent = "Required";
                        isEmailValid = false;
                    }
                    else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
                    {
                        newEmailWarn.textContent = "Email is invalid";
                        isEmailValid = false;
                    }
                    // // If all condition are met, the Email is valid, i.e "true";
                    else
                    {
                        newEmailWarn.textContent = "";
                        isEmailValid = true;
                        console.log("Email bool = " + isEmailValid);
                    }

                    
                }

                newEmail.addEventListener("input" , validateNewEmail);

            

        // Validates Input for Terms and conditions and Sign In Button

            // Conditions -
            /**
             *  1 - User must correctly fill all required fields before the TandC btn is active
             *  2 - User needs to tick for in order for sign Up btn to be active
             */
            const check_if_FieldsAreValid = document.querySelectorAll(".req_to_submit");
            const checkTandCBox = document.querySelector(".signIn_checkbox_bdr");
            const checkTandCBoxWarn = document.querySelector(".signIn_TandC_warn");
            const checkTandC = document.querySelector("#signIn_checkbox_id");
            const ourTermsBtn = document.querySelectorAll('#tandc_btn');

            // If user clicks on "info" icon the a new window is opened to display the terms and conditions
                ourTermsBtn.forEach(termBtn => {
                    termBtn.addEventListener("click" , (e) => {
                        // Lets user know that they are being re-directed
                        let askToOpen = confirm("This will open our \" Terms and Conditions\" in a new tab");
                        if(askToOpen == false)
                        {
                            e.preventDefault;
                        }
                        else
                        {
                            window.open("Uvid_tc.html" , "_blank");
                        }
                    });
                });


            // Checks If user fills All input fields Correctly
            check_if_FieldsAreValid.forEach(field => {
                field.addEventListener("mouseover" , () => {
                    // If all input fields are filled correctly, the checkbox is "active"
                    if(((isUserValid == true) && (isPassValid == true) && (isConfPassValid == true) && (isEmailValid == true)))
                    {
                        checkTandCBoxWarn.textContent = "";
                        checkTandCBox.classList.remove("active");
                        checkTandC.classList.add("active");
                        checkTandC.disabled = false;
                        console.log("Available!");

                        // Validation for Sign Up Button
                        checkTandC.addEventListener("click" , () => {
                            // If the checkbox is checked, the "Sign Up" button appears
                            if(checkTandC.checked == true)
                            {
                                signUpBtn.classList.remove("notactive");
                                // signUpBtn.type = "submit";
                            }
                            // Else, the "Sign Up" is removed
                            else
                            {
                                signUpBtn.classList.add("notactive");
                                // signUpBtn.type = "button";
                            }
                        });
                    }
                    // If not filled correctly, the signup button is removed and checkbox is inactive
                    else
                    {
                        checkTandCBoxWarn.textContent = "Please Check that all fields have been filled correctly";
                        signUpBtn.classList.remove("active");
                        // signUpBtn.type = "button";
                        checkTandC.checked = false;
                        checkTandC.disabled = true;
                        checkTandC.classList.remove("active");
                        checkTandCBox.classList.add("active");
                        console.log("Not available!");
                    }
                });
            });




    // LoGGING IN TO YOUR ACCOUNT

        // Validates Input for Email
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */
            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            
            const logInWarn = document.querySelector(".logIn_warn");

            const user_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let userLogArray = [];
            const userEmail = document.querySelector("#usrname_log");
            let isUserLogValid = false;

            userEmail.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "User"
            function validateLogInUsername(event){
                userLogArray.push(usrname_log.value);
                let lastCurArrayVal = userLogArray.at(-1);

                let userNameCond_letter = /^[A-Z a-z]/g;
                let userNameCond_num = /\d/g;
                let userScrCond = /(^_|_$)/gi;
                let tempArray = userLogArray;
                let lastTempArrayVal = tempArray.at(-1);
                let unScr = lastTempArrayVal.replace(/[^_]/g, "");

                // Checks if username starts/ends with an underscore
                if((lastCurArrayVal.match(userScrCond)))
                {
                    isUserLogValid = false;
                }
                //Checks if username has more than "one" underscore
                else if(unScr.length > 1)
                {
                    isUserLogValid = false;
                }
                // Checks if username contains only numbers and starts with a number
                else if(!(lastCurArrayVal.match(userNameCond_letter)) && (lastCurArrayVal.match(userNameCond_num)))
                {
                    isUserLogValid = false;
                }
                // Checks if username is between "5" and "20" characters
                else if(((lastCurArrayVal.length > 0) && (lastCurArrayVal.length < 5)) || (lastCurArrayVal.length > 20))
                {
                    isUserLogValid = false;
                }
                else if((event.data == null) && (lastCurArrayVal.length <= 0))
                {
                    isUserLogValid = false;
                }
                else
                {
                    isUserLogValid = true;
                    console.log("User bool = " + isUserLogValid);
                }

                
            }

            userEmail.addEventListener("input" , validateLogInUsername);


        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */

            // Allows all except spaces
            const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

            let userpasswordArray = [];
            const userPassword = document.querySelector("#usrpass_log");
            let isUserPassValid = false;

            // Sepcifies the allowed characters for Before input
            userPassword.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Validation for Password

                function validateUserPassword(event) {
                    userpasswordArray.push(usrpass_log.value);
                    let lastPassArrayVal = userpasswordArray.at(-1);
                    const userPass_Cond_SpecialChar = /\W/g;
                    const userPass_Cond_num = /\d/g;
                    const userPass_Cond_Lett = /[A-Z a-z]/g;

                    // Checks if there is any value int the input feild
                    if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserPassValid = false;
                    }
                    // Checks if the pattern is less "8" characters and above than "100" characters
                    else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserPassValid = false;
                    }
                    // Checks if the input fits the specified pattern
                    else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                        && lastPassArrayVal.match(userPass_Cond_Lett)
                        && lastPassArrayVal.match(userPass_Cond_num)
                    ))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserPassValid = false;
                    }
                    // If all checks are completed then it is accepted
                    else
                    {
                        // logInWarn.textContent = "";
                        isUserPassValid = true;
                        console.log("pass good");
                        console.log("Pass bool = " + isUserPassValid);
                    }
                }

                userPassword.addEventListener("input" , validateUserPassword);


        //  Validate Log in details

            let testLog_user = "uvidtestuser";
            let testLog_email = "craft.testuser.Acc.email@gmail.com";
            let testLog_pass = "@abcd=1234";

                // Checks if user's input is valid and if the inputted values correct
                // (TEMP) ALLOW USER ENTRY ALWAYS
                function validateLogInCreds()
                {
                    // console.log("user = " + usrname_log.value);
                    // console.log("pass = " + usrpass_log.value);
                    // This occurs if user's input is valid and the inputted values are correct
                    // if(((isUserLogValid == true) 
                    //     && (isUserPassValid == true) 
                    //     && (usrname_log.value == testLog_user.valueOf()) 
                    //     && (usrpass_log.value == testLog_pass.valueOf())
                    // ))
                    // {
                        logInWarn.textContent = "Logging in...";
                        // setTimeout(verification, 2500);
                        console.log("Logged In ✊");
                        valg.style.display = "flex";
                        logInBtn.style.display = "none";
                    // }
                    // If it is not correct, the user is required to try again
                    // else
                    // {
                    //     logInWarn.textContent = "Email or Password is incorrect";
                    // }
                }


        // Forgot Password
            const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let resetPassArray = [];
            const resetPass_email = document.querySelector("#resetPass_email_input");
            const resetPass_Label = document.querySelector("#submit_request_label");
            const resetPass_Send = document.querySelector("#submit_request");
            const resetPass_warn = document.querySelector("#resetPass_warn");
            let resetPass_validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Sepcifies the allowed characters for Before input
            resetPass_email.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(resetPass_email_cond).test(event.data))
                event.preventDefault();
            });

                function resetPasswordRequest(e)
                {
                    // adds user input into array
                    resetPassArray.push(resetPass_email_input.value);
                    let lastEmailArrayval = resetPassArray.at(-1);

                    // Checks if the field is empty
                    if((e.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        resetPass_warn.textContent = "Invalid Email";
                    }
                    // Condition for valid email
                    else if(!(lastEmailArrayval.match(resetPass_validEmail)))
                    {
                        resetPass_warn.textContent = "Invalid Email";
                    }
                    // If conditions are met, function is called to send the email
                    else
                    {
                        resetPass_warn.textContent = " Email is sending..";
                        console.log("Email is good");
                        // emailPassLink();
                        recacc.click();
                    }

                    // Generating link String Function
                    function generateRandomString() {
                        const length = 16;
                        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        var result = '';
                        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                        return result;
                    }

                    // Generate a random link
                    var link_sample = generateRandomString();
                    console.log('Link redirect Sample:', link_sample);

                    // Carries out the sending of the email
                    function emailPassLink(){
                        // Gets string for link
                        let thisLinkcart1 = generateRandomString();
                        let thisLinkcart2 = generateRandomString();

                        // Email content
                        let link_part1 = thisLinkcart1;
                        let link_part2 = thisLinkcart2;
                        new_email_verBtn.value = resetPass_email_input.value;
                        new_email_verSubject.value = "Password Reset";
                        new_email_verBody.value= "This is a test (jokes) Passwrd request for " + resetPass_email_input.value + ". Click here to reset your password " 
                        + "https://bluecraftologies.com/Join/LogIn/?=Password+Error+Req+%20%Request+Reset+Email=?%value!/" + link_part1 
                        + "/blueCrafts_Request+Error+%201%+Req+open=null?/Users/" + link_part2 + "/if+fall=open!+%call%lessChange.aspx";
                        // console.log("email val => " + new_email_verBody.value);

                        // Simulates click of button after "5" seconds
                        setTimeout(() => resetPass_Send.click() , 5000);

                        // Send Email
                        resetPass_Send.addEventListener("click" , () => {

                            // Changes sub-title to "An OTP has been sent to your email";
                            resetPass_warn.textContent = "Email has been sent";
                            console.log("Email has been sent!");

                            setTimeout(() => window.location.reload(), 10000);
                        });
                    }
                }

                // Calls function to validate and send reset password link
                resetPass_Label.addEventListener("click" , resetPasswordRequest);


                const signUpBtn = document.querySelector("#signUp_btn");
                const logInBtn = document.querySelector("#logIn_btn");
                
                signUpBtn.addEventListener("click" , validateSignUpCreds);
                logInBtn.addEventListener("click" , validateLogInCreds);




    // After creating their account This prompts the user to use their details to log in

        const signUpSuccessBox = document.querySelector(".recbase0");
        let promptLogIn = document.querySelector('#cotn');
        let signfrm = document.querySelector('.signform');
        let frshfrm = document.querySelector('.rfrshfrm');

            // Prompts for a verification <== Not added atm
            // Opens the box, to let user know their account has been created
            function validateSignUpCreds()
            {
                signUpSuccessBox.style.display = "flex";
            }

            // ====>  Verification process NOTE: Not added atm  <====
    
            // Prompts user to sign in once account has been created
            promptLogIn.addEventListener("click" , () => {
                signUpSuccessBox.style.display = "none";
                sgnh2.style.display = "none";
                signfrm.style.display = "none";
                logh2.click();
            });


    
    // These are temporary and will be upgraded in the future
        // Account Issues 
            // If user has issues with creating an account
            const accSignUpIssueBox = document.querySelector(".recbase5");
            const closeaccSignUpIssueBox = document.querySelector("#closeQuickAccGuide");
            const accSignUpIssueBtn = document.querySelectorAll(".acc_create_issue");

            accSignUpIssueBtn.forEach((btn) => 
            {
                btn.addEventListener("click" , () => {
                    accSignUpIssueBox.style.display = "flex";
                });
            });
            closeaccSignUpIssueBox.addEventListener("click" , () => {
                accSignUpIssueBox.style.display = "none";
            });
        
        // Forgot Password
            // If user forgets password (alt - original text)
            let recacc = document.querySelector('.retnw');
            let reqfrm = document.querySelector('.recbase1');
            let re1 = reqfrm.getElementsByTagName('i')[0];
            let reaccreq = document.querySelector('#submit_request_label');
            let valfrm = document.querySelector('.recbase2');
            let re2 = valfrm.getElementsByTagName('i')[0];
            let valreq = document.querySelector('#valcde');

            //this displays a menu requesting for users email
            recacc.onclick = () => {
                reqfrm.style.display = "flex";
            }

            // tHis closes the menu opened by the function above when the "x" button is clicked
            re1.onclick = () => {
                reqfrm.style.display = "none";
            }

            // This opens a tab after sending a code to the inputed email
            reaccreq.onclick = () => {
                reqfrm.style.display = "none";
                valfrm.style.display = "flex";
            }

            //it closes the tab when 'x' button is clicked
            re2.onclick = () => {
                valfrm.style.display = "none";
            }

            // WHen user inputs code
            valreq.onclick = () => {
                valfrm.style.display = "none";
                valg.style.display = "flex";
            }











// If users log in details are correct, this opens

    let valg = document.querySelector('.recbase3');
    let confrm = document.querySelector('#confm');
    let maingate = document.querySelector('.gate0');
    let g01 = document.querySelector('.gch1');
    let g02 = document.querySelector('.gch2');
    let g03 = document.querySelector('.gch3');
    let g04 = document.querySelector('.gch4');
    let g05 = document.querySelector('.gch5');
    let g06 = document.querySelector('.gch6');
    let g1 = document.querySelector('.g1');
    let g2 = document.querySelector('.g2');


    // function to animate the opening
        confrm.onclick = () => {
            valg.style.display = "none";
            regBehind.style.display = "none";
            g1.classList.add('gatexpand');
            g2.classList.add('gatexpand');
            g01.style.transform = "rotate(0deg)";
            g02.style.transform = "rotate(90deg)";
            g03.style.transform = "rotate(180deg)";
            g04.style.transform = "rotate(360deg)";
            g05.style.transform = "rotate(270deg)";
            g06.style.transform = "rotate(180deg)";
        }














// GATES


    /* 
        This section askes the user to choose their prefered show
        The option chose will open the section with the same name
    */

        let fz = document.querySelector('.gnr');
        let fz1 = document.querySelector('#fz1');
        let fz2 = document.querySelector('#fz2');
        let fz3 = document.querySelector('#fz3');
        let fz4 = document.querySelector('#fz4');
        let fz5 = document.querySelector('#fz5');
        let fz6 = document.querySelector('#fz6');
        let home = document.querySelector('.home');
        fz.style.display = "flex";
        home.style.display = "none";

            function f1() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="Movies";
                }
            }
            function f2() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="Documentaries";
                }
            }
            function f3() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="TV Show";
                }
            }
            function f4() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="Anime";
                }
            }
            function f5() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="Cartoon";
                }
            }
            function f6() {
                if(home.style.display == "none") {
                    fz.style.display = "none";
                    home.style.display = "flex";
                    g1.style.width = "0%";
                    g2.style.width = "0%";
                    // txtcnt5.innerText="not specific";
                }
            }







// NAVABAR


    // This allows the user to open the tab to reveal the buttons on the navbar
        const logohead = document.querySelector('.logo');
        const headabt = document.querySelector('.hideabtme');
        const pan2 = document.querySelector('.pan2');
        const pan2a = document.querySelector('.pan2a');
        const ri = document.querySelector('.pan2a .fa-caret-right');
        const lef = document.querySelector('.pan2a .fa-caret-left');
        pan2.style.width = "0px";
        ri.style.display = "";
        lef.style.display = "none";
        
        function opnav(){
            if(pan2.style.width == "0px") {
                pan2.style.width = "170px";
                ri.style.display = "none";
                lef.style.display = "flex";
                headabt.classList.add('hidefromview');
                logohead.classList.add('hidelogo');
            } else {
                pan2.style.width = "0px";
                ri.style.display = "";
                lef.style.display = "none";
                logohead.classList.remove('hidelogo');
                headabt.classList.remove('hidefromview');
                if(actionFrameBdr.classList.contains("bdr-atv"))
                {
                    actionFrame.classList.add('fa-bars-staggered');
                    actionFrame.classList.remove('fa-xmark');
                    actionFrameBdr.classList.remove('bdr-atv');
                    actionPage.src = "";
                    actionPage.classList.remove('action-pg-atv');
                    actionFrameBdr.removeChild(actionPage);
                    document.body.classList.add('bodystop');
                }
            }
        }






    // This opens the dropdown menu when the "info" or "bars" icon is clicked
        const actionFrame = document.querySelector('#actn_Frame_btn');
        const actionFrameBdr = document.querySelector('.Action-Frame-bdr');
        const actionFrameClose = document.querySelector('.Action-Frame-bcg');

        // when user clicks "bars" icon
        actionFrame.onclick = () => {
            if(actionFrameBdr.classList.contains('bdr-atv'))
            {
                actionFrame.classList.add('fa-bars-staggered');
                actionFrame.classList.remove('fa-xmark');
                actionFrameBdr.classList.remove('bdr-atv');
                actionPage.src = "";
                actionPage.classList.remove('action-pg-atv');
                actionFrameBdr.removeChild(actionPage);
                document.body.classList.remove('bodystop');
            }
            else
            {
                if(srchbox.classList.contains('srchatv') || searchframe.classList.contains('frameatv'))
                {
                    srchbox.classList.remove('srchatv');
                    searchframe.classList.remove('frameatv');
                    srchpage.classList.remove('pageatv');
                    searchframe.removeChild(srchpage);
                }
                actionFrame.classList.remove('fa-bars-staggered');
                actionFrame.classList.add('fa-xmark');
                actionFrameBdr.classList.add('bdr-atv');
                actionPage = document.createElement('iframe');
                actionPage.src = "Uvid_Actions.html";
                actionPage.classList.add('action-pg-atv');
                actionFrameBdr.appendChild(actionPage);
                document.body.classList.add('bodystop');
            }
        }

        actionFrameClose.onclick = () => {
            actionFrame.classList.add('fa-bars-staggered');
            actionFrame.classList.remove('fa-xmark');
            actionFrameBdr.classList.remove('bdr-atv');
            actionPage.src = "";
            actionPage.classList.remove('action-pg-atv');
            actionFrameBdr.removeChild(actionPage);
            document.body.classList.remove('bodystop');
        }
        



        //  This alert the user to the slogan if user clicks on the company name
            let uvidgoal = document.querySelector('.logo');
            uvidgoal.onclick = () => {
                alert('Every genre you can think of.. we got it');
            }

    
            


         


            




















// FOR SEARCH



    /********
     * This will
    * 1. It will open the search tab
    * 2. It will create an iframe
    *3. It will link the file containing the searchcontent
     ******/
    const srchbox = document.querySelector('.searchcontainer');
    const searchframe = document.querySelector('.searchsub1');
    const srchinitiaize = document.querySelector('.search-pull');

        srchinitiaize.onclick = function opnclssearch() {
            document.body.classList.add('bodystop');
            srchbox.classList.add('srchatv');
            searchframe.classList.add('frameatv');
            srchpage = document.createElement('iframe');
            srchpage.src = "Uvid_Content/Uvid_Search/Uvid_Search_Catalog.html";
            srchpage.classList.add('pageatv');
            searchframe.appendChild(srchpage);
            if(actionFrameBdr.classList.contains('bdr-atv'))
            {
                actionFrame.classList.add('fa-bars-staggered');
                actionFrame.classList.remove('fa-xmark');
                actionFrameBdr.classList.remove('bdr-atv');
                actionPage.src = "";
                actionPage.classList.remove('action-pg-atv');
                actionFrameBdr.removeChild(actionPage);
                document.body.classList.remove('bodystop');
            }
        }


    /**
     * this will perform the opposite of the above
     */
        const searchxmark = document.querySelector('.closesearchctn');
        const searchxblank = document.querySelector('.searchsub2');

        searchxmark.onclick = function closesearch() {
            document.body.classList.remove('bodystop');
            srchbox.classList.remove('srchatv');
            searchframe.classList.remove('frameatv');
            srchpage.classList.remove('pageatv');
            searchframe.removeChild(srchpage);
        }

        searchxblank.onclick = function closesearch() {
            document.body.classList.remove('bodystop');
            srchbox.classList.remove('srchatv');
            searchframe.classList.remove('frameatv');
            srchpage.classList.remove('pageatv');
            searchframe.removeChild(srchpage);
        }









        






// DESKTOP



    // this will open a modal/popup to give details of the section before one heads to the site

            let opnborder = document.querySelectorAll('.secsub');
            let borderctnt = document.querySelectorAll('.section-details-border');
            let borderPic = document.querySelectorAll('.section-img');
            let borderInfo = document.querySelectorAll('.section-info');
            let offborder = document.querySelectorAll('.close-border');

            //opening the popup
            var bdrpop = function(bdrClick){
                borderctnt[bdrClick].classList.add('bordertog');
            }
            
            var infoPicpop = function(infoPicClick){
                borderPic[infoPicClick].classList.add('section-img-atv');
            }

            var infoDetpop = function(infoClick){
                borderInfo[infoClick].classList.add('section-info-atv');
            }
    
            opnborder.forEach((opnbdrs, i) => {
                opnbdrs.addEventListener("click" , () => {
                    bdrpop(i);
                    infoPicpop(i);
                    infoDetpop(i);
                    document.body.classList.add('bodystop');
                });
            });
    
            //this will close the popup
            offborder.forEach((closebdrs, i) => {
                closebdrs.addEventListener("click" , () => {
                    borderctnt.forEach((opupBdrs) => {
                        opupBdrs.classList.remove('bordertog');
                    });
                    borderPic.forEach((opupPics) => {
                        opupPics.classList.remove('section-img-atv');
                    });
                    borderInfo.forEach((opupInfos) => {
                        opupInfos.classList.remove('section-info-atv');
                    });
                    document.body.classList.remove('bodystop');
                });
            });
    
    
        // This is will open the different links
        // I'm choosing to do this instead of adding the "a" tag
    
    
    
    
        // to...
    
            // open TV
            let section1 = document.querySelector('.sect1'); 
            section1.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    
            // open MOVIES
            let section2 = document.querySelector('.sect2');
            section2.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    
            // open DOCUMENTARIES
            let section3 = document.querySelector('.sect3');
            section3.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    
            // open ANIME
            let section4 = document.querySelector('.sect4');
            section4.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    
            // open CARTOON
            let section5 = document.querySelector('.sect5');
            section5.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    
            // open NEWS
            let section6 = document.querySelector('.sect6');
            section6.onclick = () => {
                window.open(URL="Uvid_content/Uvid_Anime.html", target="_blank");
            }
    





        // This opens an iframe menu when something is clicked
        function openPageFrame(thispageLink){

            // Creating the div element
            const pageFrameBdr = document.createElement('div');

            // Styling the element
            pageFrameBdr.classList.add('pageframeBdr');

            // Creating the iframe
            const pageIframe = document.createElement('iframe');
            
            // Styling and adding attributes
            pageIframe.classList.remove('bdr-atv');
            pageIframe.src = thispageLink;
            pageIframe.classList.add('pageIframeClass');

            // designing the close button
            const closeIframeBtn = document.createElement('i');
            closeIframeBtn.classList.add('fa-solid');
            closeIframeBtn.classList.add('fa-xmark');
            closeIframeBtn.classList.add('closePageIframe');
            
            // Appending the class
            pageFrameBdr.appendChild(closeIframeBtn);
            pageFrameBdr.appendChild(pageIframe);

            document.body.appendChild(pageFrameBdr);
            document.body.classList.add('bodystop');

            //closing the iframe
            closeIframeBtn.onclick = () => {
                document.body.removeChild(pageFrameBdr);
                document.body.classList.remove('bodystop');
            }
        }








































    //     //opening the popup
    //     var opup = function(opupClick){
    //         openBox[opupClick].classList.add('scbodyxpd');
    //     }

    //     opendsp.forEach((opendsps, i) => {
    //         opendsps.addEventListener("click" , () => {
    //             opup(i);
    //         });
    //     });

    //     //this will close the popup
    //     closedsp.forEach((closedsps, i) => {
    //         closedsps.addEventListener("click" , () => {
    //             openBox.forEach((opupBoxes) => {
    //                 opupBoxes.classList.remove('scbodyxpd');
    //             });
    //         });
    //     });

const {member, Sequelize } = require('../../models');
const crypto = require('crypto');
const path = require('path');
const view = path.join(__dirname, "../../views/");

//회원가입
exports.join = async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password;
        var name = req.body.name;
        var phone = req.body.phone;
        var email = req.body.email1 + '@' + req.body.email2;

        //password 암호화
        var hashPwd = crypto.createHash("sha512").update(password).digest("hex");

        //아이디 중복 검사
        var result = await member.findOne({
            where:{
                username: username
            }
        });

        if(result){
            console.log("이미 사용중인 아이디입니다.");
        }

        await member.create({
            username: username,
            password: hashPwd,
            name: name,
            phone: phone,
            email: email
        });

        console.log("회원가입 성공");
        return res.sendFile(view + "/index.html");
    } catch (error) {
        console.log("회원가입 실패" + error);
        return res.sendFile(view + "/member/join.html");
    }
}

//아이디 중복검사

//인증번호 발송
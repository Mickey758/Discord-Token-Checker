function check(token){
    if (token == ""){
        new Toast({message: 'Please enter a token.',type: 'danger'});
    }
    else{
        $.get({
            url:'https://discord.com/api/users/@me',
            headers:{'authorization': token},
            success: function(data){
                id = data.id;
                avatar = 'https://cdn.discordapp.com/avatars/'+id+'/'+data.avatar+'.png'
                username = data.username+'#'+data.discriminator;
                bio = data.bio;
                email = data.email;
                mfa = data.mfa_enabled;
                phone = data.phone;
                verified = data.verified
                $('#details').removeClass('hidden');
                $('#profile').attr('src', avatar);
                $('#username').text(username);
                $('#bio').text(bio);
                $('#email').text(email);
                $('#mfa').text(mfa);
                $('#phone').text(phone);
                $('#verified').text(verified);
                new Toast({message: 'Successfully got info for '+username+'!',type: 'success'});
            },
            error:function(xhr){
                if (xhr.status == 401){
                    new Toast({message: 'Invalid token.',type: 'danger'});
                }else{
                    new Toast({message: 'An error occured.',type: 'danger'});
                }
            }
        })
    }
}
$('#check').click(
    function(){
        $('#details').addClass('hidden');
        var token = $('#token').val();
        check(token);
    }
);
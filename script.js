function insertValue(id,type,value,fade){
    if(type == 0){
        $('#'+id).fadeOut(fade,function(){
            $('#'+id).find('.preload-element').remove();
            if(isEditMode == false){
                $('#'+id).html(value);
            }else{
                $('#'+id).find('div').fadeIn('fast');
            }
            $('#'+id).fadeIn(fade);
        });
    }
    if(type == 1){
        if(value == undefined){
            value = "https://layouts.gmod-lsm.com/v2/assets/empty.png";
        }
        $('#'+id+'-preload').fadeOut(fade,function(){
            $('#'+id).find('.preload-element').remove();
            $('#'+id+'-loaded').attr('src', value);
            $('#'+id+'-loaded').fadeIn(fade);
            $('#'+id+'-loaded').trigger('load');
        });
    }
    if(type == 2){
        if(value == undefined){
            value = "https://layouts.gmod-lsm.com/v2/assets/empty.png";
        }
        $('#'+id+'-preload').fadeOut(fade,function(){
            $('#'+id).find('.preload-element').remove();
            $('#'+id+'-loaded').attr('src', value);
            $('#'+id+'-loaded').fadeIn(fade);
            $('#'+id+'-loaded').trigger('load');
        });
        $('#'+id+'-loaded-2').attr('src', value).fadeIn(fade+500);
        $('#'+id+'-loaded-2').trigger('load');
        if(value != "https://layouts.gmod-lsm.com/v2/assets/empty.png"){
            if(value.length <= 3){
                //$('#'+id).fadeOut('fast');
            }else{
                $('#'+id).fadeIn('fast');
            }
        }
    }
    if(type == 3){
        $('#'+id).fadeOut(fade,function(){
            $('#'+id).find('.preload-element').remove();
            $('#'+id).text(value);
            $('#'+id).fadeIn(fade);
            if(value.length <= 0){
                $('#'+id).parent().parent().fadeOut('fast');
            }else{
                $('#'+id).parent().parent().fadeIn('fast');
            }
        });
    }
    if(type == 4){
        var sid = [];
        sid[0] = value;
        var elemid = id.split("-")[id.split("-").length - 1];
        if(window.location.hostname	== "api.8null.com"){
            var apiSource = "8null/";
        }else{
            var apiSource = "";
        }
         $.ajax({
          url: 'https://corsproxy.io/?'+encodeURIComponent(`https://api.gmod-lsm.com/v2/screenGetSteamProfile.php`),
          method:"POST",
          data: {steamid:sid},
          dataType:"JSON",
          success:function(resdata)
          {   
              if(resdata['steamid'] != false){
                  $('#insert-staff-name-text-'+elemid).text(resdata['personaname']);
                  insertValue('insert-staff-avatar-'+elemid,1,resdata['avatarfull'],500);
                  $('#set-staff-'+elemid).find('img').attr('src',resdata['avatarfull']);
                $('#set-staff-'+elemid).find('.add-btn').removeClass('disabled');
                  $('#set-staff-steamid-text-'+elemid).find('input').removeClass('is-invalid');
                  $('#set-staff-steamid-text-'+elemid).find('input').addClass('is-valid');
              }else{
                $('#insert-staff-name-text-'+elemid).text("Staff Member");
                $('#set-staff-'+elemid).find('.add-btn').addClass('disabled');
                $('#set-staff-'+elemid).find('img').attr('src','../../assets/media/icons/steam-error.jpg');
                  $('#insert-staff-name-text-'+elemid).parent().parent().parent().find('img').attr('src','../../assets/media/icons/steam-error.jpg');
                  $('#set-staff-steamid-text-'+elemid).find('input').removeClass('is-valid');
                  $('#set-staff-steamid-text-'+elemid).find('input').addClass('is-invalid');
              }
            }
          });
    }
    if(type == 5){
        var sid = [];
        sid[0] = value;
        if(window.location.hostname	== "api.8null.com"){
            var apiSource = "8null/";
        }else{
            var apiSource = "";
        }
         $.ajax({
          url: 'https://corsproxy.io/?'+encodeURIComponent(`https://api.gmod-lsm.com/v2/screenGetSteamProfile.php`),
          method:"POST",
          data: {steamid:sid},
          dataType:"JSON",
          success:function(resdata)
          {   
              if(resdata['steamid'] != false){
                  insertValue(id+'name',0,resdata['personaname'],500);
                insertValue(id+'steamid',0,sid[0],500);
                insertValue(id+'avatar',1,resdata['avatarfull'],500);
              }
            }
          });
    }
    if(type == 6){
        $('#'+id).fadeOut(fade,function(){
            $('#'+id).find('.preload-element').remove();
            $('#'+id).text(value);
            $('#'+id).fadeIn(fade);
        });
    }
}
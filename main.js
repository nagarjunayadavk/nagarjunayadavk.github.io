
var duration = 250;
pageEffectStart();
function pageEffectStart(){
	$(window).scrollTop(0);
	setTimeout(function(){ $('.loading-eefect-1').show(); }, 1*duration);
	setTimeout(function(){ $('.loading-eefect-2').show(); }, 2*duration);

    setTimeout(function(){ $('.quote-mask').append('<li> Hello Welcome Back </li>'); }, 6*duration);
	setTimeout(function(){ $('.quote-mask li:nth-child(1)').remove(); }, 7*duration);
	setTimeout(function(){ $('.quote-mask').append('<li> Thanks for Visiting. </li>'); }, 9*(duration));
	setTimeout(function(){ $('.quote-mask li:nth-child(1)').remove(); }, 10*(duration));
	setTimeout(function(){ $('#effect').addClass('effect-fadeoff'); }, 13*(duration));
	setTimeout(function(){ $('#effect').css('display','none'); }, 14*(duration));
	setTimeout(function(){ $('#effect').removeClass('effect-fadeoff'); }, 15*(duration));
}
function pageEffectClose(){
    // setTimeout(function(){ $('#effect').addClass('effect-fadeoff'); }, 2*(duration));
}
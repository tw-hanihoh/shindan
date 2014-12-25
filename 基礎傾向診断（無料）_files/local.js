
$(function(){
	
//-----質問ページ用-----

	$('.questionLabel:eq(0)').slideDown(300);
	$('.answer:eq(0)').slideDown(300);
	var $qnum=0;
	var $qmaxnum=$('.questionLabel').length;
	$(".prebtn").css('display','none');
	
	//次の質問ボタン
	$(".nextbtn").click(function(){
		if($(".q_pretext").css('display')!='none'){
			$(".q_pretext").slideUp(300);
		}
		if($qnum<$qmaxnum-1){
			$('.questionLabel:eq('+$qnum+')').slideUp(300);
			$('.answer:eq('+$qnum+')').slideUp(300);
			$qnum++;
			$('.questionLabel:eq('+$qnum+')').slideDown(300);
			$('.answer:eq('+$qnum+')').slideDown(300);
			if($qnum==$qmaxnum-1){
				$(".nextbtn").slideUp(300);
				$(".resultbtnblock").slideDown(300);
			}
		}
		if($qnum>0 && $(".prebtn").css('display')=='none'){
			$(".prebtn").slideDown(300);
		}
		$('html,body').animate({ scrollTop: 0 }, 'slow'); return false;
	});
	
	//前の質問ボタン
	$(".prebtn").click(function(){
		if($qnum>0){
			$('.questionLabel:eq('+$qnum+')').slideUp(300);
			$('.answer:eq('+$qnum+')').slideUp(300);
			$qnum--;
			$('.questionLabel:eq('+$qnum+')').slideDown(300);
			$('.answer:eq('+$qnum+')').slideDown(300);
			if($qnum==0){
				$(".prebtn").slideUp(300);
			}
		}
		if($qnum<$qmaxnum-1 && $(".nextbtn").css('display')=='none'){
			$(".nextbtn").slideDown(300);
		}
		$('html,body').animate({ scrollTop: 0 }, 'slow'); return false;
	});
	
	
})
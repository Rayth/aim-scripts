javascript: (() => {
	function doStuff(){
		amountSpent = $('.statistic--user__general > li:nth-child(5) > span:nth-child(2)')[0].innerText.replace(" $", "");
		cashback = $('.statistic--user__general > li:nth-child(7) > span:nth-child(2)')[0].innerText.replace(" $", "");
		budget = $('.statistic--user__general > li:nth-child(4) > span:nth-child(2)')[0].innerText.replace(" $", "");
		budgetLeft = ( budget-amountSpent ).toFixed(2);
		PercProfitOnSpent = ( ((cashback/amountSpent)*100)-100 ).toFixed(2);
		ProfitOnSpent = ( cashback-amountSpent ).toFixed(2);
		TotalProfitPerc = ( ((cashback/budget)*100)-100 ).toFixed(2);
		TotalProfit = ( cashback-budget ).toFixed(2);
		percBudgetSpent = ( ((amountSpent/budget)*100) ).toFixed(2);
		$('.statistic--user__general')[0].innerHTML += '<li></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><span>Stats on Budget:<br/></span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><p>% of Budget Spent:</p> <span>'+percBudgetSpent+'%</span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><p>Budget Left:</p> <span>'+budgetLeft+'$</span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><p>Profit vs Budget:</p> <span>'+TotalProfit+'$ | '+TotalProfitPerc+'%</span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><span>Stats on Spending:<br/></span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li>Note: The amount spent updates at 00:00 UTC</li>';
		$('.statistic--user__general')[0].innerHTML += '<li><p>Profit vs Spent:</p> <span>'+ProfitOnSpent+'$</span></li>';
		$('.statistic--user__general')[0].innerHTML += '<li><p>Percentage Profit:</p> <span>'+PercProfitOnSpent+'%</span></li>';
	} 
})();

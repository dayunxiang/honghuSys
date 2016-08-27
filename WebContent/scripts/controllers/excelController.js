define([ 'controllers/controllers', 'jquery' ], function(controllers, jquery) {
	'use strict'
	controllers.controller('excelController', [ '$scope', 'excelLoadService',
			function($scope, excelLoadService) {
				$(document).ready(function() {
					excelLoadService.getExcelData({
						success:function(data){
							$(function() {
								$('#table').bootstrapTable({
									data : data
								});
							});
						},
						falure:function(){
							alert("暂无数据可用!");
						}
					})
				})

			} ])
})
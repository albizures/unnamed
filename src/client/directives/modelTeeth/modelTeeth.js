
const big = require('../../assets/big.jpg');
const small = require('../../assets/small.jpg');

exports.name = 'modelTeeth';

/*@ngInject*/
exports.fn = function () {
  let bigAreas = [
    {name: 'diente 0', key: 't0', width: '27px', height: '22px', top: '157px', left: '98px', 'border-radius': '7px 10px 10px 5px'},
    {name: 'diente 1', key: 't1', width: '29px', height: '28px', top: '129px', left: '99px', 'border-radius': '12px 11px 11px 7px'},
    {name: 'diente 2', key: 't2', width: '30px', height: '32px', top: '96px', left: '104px', 'border-radius': '12px 14px 11px 8px'},
    {name: 'diente 3', key: 't3', width: '27px', height: '22px', top: '73px', left: '111px', 'border-radius': '10px 16px 10px 7px'},
    {name: 'diente 4', key: 't4', width: '27px', height: '22px', top: '53px', left: '119px', 'border-radius': '15px 21px 16px 21px'},
    {name: 'diente 5', key: 't5', width: '23px', height: '26px', top: '30px', left: '133px', 'border-radius': '11px 13px 11px 15px'},
    {name: 'diente 6', key: 't6', width: '20px', height: '26px', top: '20px', left: '155px', 'border-radius': '11px 15px 23px 16px', transform: 'rotate(-19deg)' },
    {name: 'diente 7', key: 't7', width: '24px', height: '30px', top: '14px', left: '174px', 'border-radius': '8px 7px 11px 16px'},
    {name: 'diente 8', key: 't8', width: '27px', height: '30px', top: '13px', left: '199px', 'border-radius': '7px 9px 17px 10px'},
    {name: 'diente 9', key: 't9', width: '19px', height: '30px', top: '17px', left: '226px', 'border-radius': '8px 9px 10px 7px', transform: 'rotate(17deg)'},
    {name: 'diente 10', key: 't10', width: '23px', height: '26px', top: '29px', left: '242px', 'border-radius': '16px 12px 12px 10px'},
    {name: 'diente 11', key: 't11', width: '27px', height: '23px', top: '51px', left: '253px', 'border-radius': '19px 10px 13px 5px'},
    {name: 'diente 12', key: 't12', width: '30px', height: '24px', top: '72px', left: '259px', 'border-radius': '22px 18px 14px 8px'},
    {name: 'diente 13', key: 't13', width: '28px', height: '33px', top: '96px', left: '264px', 'border-radius': '11px 10px 11px 11px'},
    {name: 'diente 14', key: 't14', width: '27px', height: '26px', top: '130px', left: '270px', 'border-radius': '7px 10px 7px 7px'},
    {name: 'diente 15', key: 't15', width: '29px', height: '23px', top: '157px', left: '272px', 'border-radius': '11px 10px 10px 11px'},
    {name: 'diente 16', key: 't16', width: '29px', height: '24px', top: '220px', left: '271px', 'border-radius': '7px 10px 7px 5px'},
    {name: 'diente 17', key: 't17', width: '28px', height: '27px', top: '247px', left: '269px', 'border-radius': '7px 10px 10px 5px'},
    {name: 'diente 18', key: 't18', width: '27px', height: '30px', top: '277px', left: '263px', 'border-radius': '7px 10px 10px 5px'},
    {name: 'diente 19', key: 't19', width: '27px', height: '22px', top: '310px', left: '257px', 'border-radius': '8px 10px 10px 11px'},
    {name: 'diente 20', key: 't20', width: '25px', height: '22px', top: '331px', left: '250px', 'border-radius': '7px 10px 10px 14px'},
    {name: 'diente 21', key: 't21', width: '24px', height: '24px', top: '349px', left: '239px', 'border-radius': '7px 18px 10px 12px'},
    {name: 'diente 22', key: 't22', width: '20px', height: '26px', top: '358px', left: '220px', 'border-radius': '16px 18px 10px 12px', transform: 'rotate(-19deg)' },
    {name: 'diente 23', key: 't23', width: '22px', height: '28px', top: '362px', left: '199px', 'border-radius': '7px 18px 10px 12px'},
    {name: 'diente 24', key: 't24', width: '24px', height: '28px', top: '363px', left: '175px', 'border-radius': '7px 11px 11px 7px'},
    {name: 'diente 25', key: 't25', width: '22px', height: '26px', top: '358px', left: '153px', 'border-radius': '21px 10px 11px 17px'},
    {name: 'diente 26', key: 't26', width: '23px', height: '24px', top: '349px', left: '134px', 'border-radius': '11px 8px 10px 12px'},
    {name: 'diente 27', key: 't27', width: '25px', height: '24px', top: '328px', left: '122px', 'border-radius': '23px 16px 19px 13px'},
    {name: 'diente 28', key: 't28', width: '24px', height: '23px', top: '309px', left: '115px', 'border-radius': '7px 11px 11px 7px'},
    {name: 'diente 29', key: 't29', width: '27px', height: '29px', top: '278px', left: '106px', 'border-radius': '12px 10px 9px 9px '},
    {name: 'diente 30', key: 't30', width: '30px', height: '28px', top: '248px', left: '100px', 'border-radius': '11px 11px 10px 12px'},
    {name: 'diente 31', key: 't31', width: '30px', height: '28px', top: '220px', left: '100px', 'border-radius': '11px 11px 10px 12px'}
  ];

  let smallAreas = [];

  function link(/*scope, element, attrs*/) {
    
  }
  
  /*@ngInject*/
  function controller($scope) {
    $scope.isBig = true;
    setStatus($scope.isBig);

    function setStatus(isBig) {
      if (isBig) {
        $scope.url = big;
        $scope.areas = bigAreas;
      } else {
        $scope.url = small;
        $scope.areas = smallAreas;
      }
    }
    $scope.setStatus = setStatus;
  }
  return {
    scope: {
      handler: '=albSelectTeeth',
      getElements: '=albElements'
    },
    restrict: 'E',
    replace: true,
    link,
    controller,
    template: require('./modelTeeth.pug')()
  };
};
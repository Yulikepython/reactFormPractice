const flows = [{
    "id": 1,
    "申込":{
        "保証会社審査": true,
        "オーナー審査": true,
        "申込情報": false
    },
    "契約準備":{
        "契約情報": true,
        "契約金案内": false,
        "契約書類": false
    },
    "契約":{
        "入金確認": false,
        "必要書類": false,
        "契約完了": false
    },
    "入居準備":{
        "入居日": false,
        "鍵": false,
        "入居立会い": false
    }
},
{
    "id": 2,
    "申込":{
        "保証会社審査": true,
        "オーナー審査": false,
        "申込情報": true
    },
    "契約準備":{
        "契約情報": false,
        "契約金案内": false,
        "契約書類": false
    },
    "契約":{
        "入金確認": false,
        "必要書類": false,
        "契約完了": false
    },
    "入居準備":{
        "入居日": false,
        "鍵": false,
        "入居立会い": false
    }
},
{
    "id": 3,
    "申込":{
        "保証会社審査": false,
        "オーナー審査": true,
        "申込情報": false
    },
    "契約準備":{
        "契約情報": true,
        "契約金案内": false,
        "契約書類": false
    },
    "契約":{
        "入金確認": false,
        "必要書類": false,
        "契約完了": false
    },
    "入居準備":{
        "入居日": false,
        "鍵": false,
        "入居立会い": false
    }
}
]
export default flows
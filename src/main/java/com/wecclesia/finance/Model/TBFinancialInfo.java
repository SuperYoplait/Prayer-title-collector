package com.wecclesia.finance.Model;

import java.util.Date;

//입급내역구분
enum DepositType {
    SundayOffering,         // 주일헌금
    ThanksgivingOffering,   // 감사헌금
    tithe,                   // 십일조
    ExternalOffering,       // 외부헌금
    Etc                     // 기타
}

//출금내역구분
enum WithdrawType {

}


//입출금 구분
enum TransferType {
    Deposit, Withdraw
}

public class TBFinancialInfo {

    public Date TransferTime;

    public TransferType TransferType;

    public DepositType DepositType;

    public long Amount;

    public boolean IsDocumentation;

    public Date DocumentationTime;

    public String Comment;
}

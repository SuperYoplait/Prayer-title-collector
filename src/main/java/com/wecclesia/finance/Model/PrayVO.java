package com.wecclesia.finance.Model;

import org.springframework.context.annotation.EnableMBeanExport;

import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;

public class PrayVO {

    public String Name;
    public Boolean Audit;           // 감사
    public Boolean Mediator;        // 중보
    public Boolean Etc;             // 기타
    public Boolean IsOpen;            // 공개 / 비공개

    public String Context;          // 기도제목

    private Date CreateTime;        // 등록시간


    public PrayVO(String Name, Boolean Audit, Boolean Mediator, Boolean Etc, Boolean IsOpen, String Context) {
        this.Name = Name;
        this.Audit = Audit;
        this.Mediator = Mediator;
        this.Etc = Etc;
        this.IsOpen = IsOpen;
        this.Context = Context;

        this.CreateTime = new Date();

    }


    @Override
    public String toString() {
        return "[" +CreateTime+ "]Pray reg {" +
                "name ='" + Name + '\'' +
                ", content='" + Context + '\'' +
                '}';
    }

}

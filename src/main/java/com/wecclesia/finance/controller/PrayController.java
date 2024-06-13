package com.wecclesia.finance.controller;

import com.wecclesia.finance.Model.PrayVO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class PrayController {


    // Login 을 위한 HTML 파일 내려주기
    @PostMapping("/pray/create")
    public ResponseEntity<String> PrayPage(PrayVO vo) {
        System.out.println(vo.toString());
        return ResponseEntity.ok("Pray request received");

    }
}

package com.wecclesia.finance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class index {


    // Login 을 위한 HTML 파일 내려주기
    @GetMapping("/")
    public String loginPage() {
        return "redirect:/index.html";
    }

    // Login 을 위한 HTML 파일 내려주기
    @GetMapping("/pray")
    public String PrayPage() {
        return "redirect:/pray.html";
    }

    @GetMapping("/showMe")
    public List<String> hello() {
            return Arrays.asList("첫번째 인사", "두번째 인사");
    }
}

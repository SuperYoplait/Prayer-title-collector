package com.wecclesia.finance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class WecclesiaFinanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WecclesiaFinanceApplication.class, args);
	}


}



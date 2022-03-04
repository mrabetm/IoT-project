package com.iot_mrabetm.dice_website_backend.webConfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry){
        corsRegistry.addMapping("/**")
                .allowedMethods("GET","POST","PUT","DELETE")
                .allowedOriginPatterns("*")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}

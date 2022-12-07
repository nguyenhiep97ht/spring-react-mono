package com.example.application.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.vaadin.flow.spring.security.VaadinWebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends VaadinWebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;
  
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Set default security policy that permits Hilla internal requests and
        http.authorizeRequests().antMatchers("/public-view").permitAll(); // custom matcher
        // denies all other
        super.configure(http);
        setLoginView(http, "/login");
        // use a form based login
        // http.formLogin();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Configure users and roles in memory
         auth.jdbcAuthentication()
      .dataSource(dataSource)
      .usersByUsernameQuery(
          "SELECT username, password, enabled FROM public.user WHERE username=?")
      .authoritiesByUsernameQuery(
          "SELECT username, authority FROM public.authorities WHERE username=?")
      .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
        web.ignoring().antMatchers("/images/**");
    }
}

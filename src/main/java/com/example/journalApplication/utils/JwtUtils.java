package com.example.journalApplication.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtils {
    public String generateToken(String username){
        Map<String,Object> claims = new HashMap<>();
        return createToken(claims,username);
    }
    private String createToken(Map<String,Object> claims,String username){
        return Jwts.builder().claims(claims)
                .subject(username).header().empty().add("typ","jwt")
                .and()
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+1000*60*120))
                .signWith(getSigningKey()).compact();
    }
    private String SECRET_KEY = "TaK+jajljdsjlj&bsajkjk*jsjkahkhda";
    private SecretKey getSigningKey(){
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }
    public String extractUsername(String token){
        return extractAllClaims(token).getSubject();
    }
    private Claims extractAllClaims(String token){
        return Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(token).getPayload();
    }
    public  boolean validateToken(String token,String userName){
        final String extractedUsername=extractUsername(token);
        return (extractedUsername.equals(userName) && !isTokenExpired(token));
    }
    private boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }
    public Date extractExpiration(String token){
        return extractAllClaims(token).getExpiration();
    }
}

package com.husserl;

public class DSA {
    public static void main(String[] args) {
        int res = rec(5);
        System.out.println(res);
    }


    public static int rec(int input){
        if(input <= 1) return 1;
        return input + rec(input-1);
    }
}


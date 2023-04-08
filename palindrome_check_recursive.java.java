package com.husserl;

public class DSA {
    public static void main(String[] args) {


        String str = "abccba";
        boolean pal = pal(str);
        System.out.println(pal);

    }


    public static boolean pal(String input){

        if ( input.length() == 0 ||  input.length() == 1 ) return true;
        if(input.charAt(0) == input.charAt(input.length() - 1)){
            return pal(input.substring(1, input.length() - 1));
        }

        return false;
    }
}


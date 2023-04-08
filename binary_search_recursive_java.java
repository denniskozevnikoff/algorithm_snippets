package com.husserl;

public class DSA {
    public static void main(String[] args) {

        int[] arr = {-1,0,1,2,3,4,7,9,10,20};
        int res = bin(arr, 0, arr.length-1, 7);

        System.out.println(res);

    }


public static int bin(int[] A, int left, int right, int x){

    if(left > right){
        return -1;
    }

    int mid = (left + right) / 2;

    if(x == A[mid]){
        return mid;
    }

    if(x < A[mid]){
        return bin(A, left, mid-1, x);
    }

    return bin(A, mid+1, right, x);
}
}


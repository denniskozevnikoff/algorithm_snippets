package com.husserl;

public class Main{
    public static void main(String[] args){

        int array[] = {0, 11, 22, 33, 44, 55};
        System.out.println(search(array, 22, 0, 5));
    }

    static int search(int[] arr, int target, int s, int e){

        if(s > e){
                return -1;
        }

        int m = s + (e - s) / 2;

        if (arr[m] == target){
            System.out.println(m);
            return arr[m];
        }

        if(target < arr[m]){
            return search(arr, target, s, m-1);
        }
            return search(arr, target, m+1, e);

      
    }

}

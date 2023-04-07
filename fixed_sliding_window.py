def fixed_sliding_window(arr: list[int], k: int) -> list[int]:
    curr_subarray = sum(arr[:k])
    print(arr[:k])
    print(curr_subarray)
    result = [curr_subarray]

    for i in range(1, len(arr) - k + 1):
        curr_subarray = curr_subarray - arr[i-1]
        curr_subarray = curr_subarray + arr[i+k-1]

        result.append(curr_subarray)
    return result


lst = [1,2,1,4,1,1,1]
print(fixed_sliding_window(lst, 3))

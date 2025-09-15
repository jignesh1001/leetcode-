class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> count = new HashMap<>();

        for(int i = 0 ; i < nums.length;i++){
            count.put(nums[i],count.getOrDefault(nums[i],0) + 1);
        }

        List<int[]> arr = new ArrayList<>();

        for(Map.Entry<Integer,Integer> entry : count.entrySet()){
            arr.add(new int[]{entry.getValue(),entry.getKey()});
        }

        arr.sort((a,b) -> b[0] - a[0]);
        
        int[] result = new int[k];

        for(int i = 0; i < k;i++){
            result[i] = arr.get(i)[1];
        }

        return result;

    }
}
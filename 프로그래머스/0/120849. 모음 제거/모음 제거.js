function solution(my_string) {
    const regex = /[aeiou]/g;
   return my_string.replace(regex,'');
}
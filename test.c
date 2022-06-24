#include<stdio.h>
int main(){
    char name[10],dob[10],clz[45];
    int numbe;
    // char clz[45];
    printf("enter you name: \n");
    gets(name);
    printf("name : ");
    puts(name);
    printf("enter your dat of birth:\n");
    gets(dob);
    printf("dabte of birth");
    puts(dob);
    printf("enter your clz name");
    scanf("%s",&clz);
    printf("clz name %s",clz);
    printf("enter mobile number");
    scanf("%d",&numbe);
    printf("mobile number %d",numbe);
    
    return(0);
}
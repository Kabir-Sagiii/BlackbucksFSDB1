public class Swap {
    int a;
    int b;
    int temp;

    public Swap() {
        a = 10;
        b = 20;
    }

    public void display(String msg) {
        System.out.println(msg);
        System.out.println(a);
        System.out.println(b);
    }

    public static void main(String Args[]) {
        Swap s1 = new Swap();
        s1.display("Before Swapping");
        s1.temp = s1.a; // temp = 10 , a=10
        s1.a = s1.b; // a =20 b=20
        s1.b = s1.temp; // temp=10b=10
        s1.display("After Swaping");

    }

}

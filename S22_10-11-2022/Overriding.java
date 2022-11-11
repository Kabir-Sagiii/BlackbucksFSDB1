class A {

    int x = 10;
    int y = 20;
    int result;

    public void operation() {
        result = x + y;
        System.out.println(result); // 30
    }
}

class B extends A {
    public void operation() {
        result = x * y;
        System.out.println(result); // 200
    }

    public void display() {
        this.operation();
        super.operation();
    }

    public static void main(String[] args) {
        B b1 = new B();
        b1.display();
    }
}

interface BankInterface {

    public void checkBalance();

    public void transferMoney();

}

class AxisBank implements BankInterface {
    public void checkBalance() {
        System.out.println("My balance is axis account :1000000");
    }

    public void transferMoney() {
        System.out.println("successfully transfered");
    }
}

class HDFCBank implements BankInterface {
    public void checkBalance() {
        System.out.println("My balance is of hdfc account :1000000");
    }

    public void transferMoney() {
        System.out.println("successfully transfered");
    }
}

class BankDemo {
    public static void main(String[] args) {
        HDFCBank h1 = new HDFCBank();
        AxisBank a1 = new AxisBank();

        h1.checkBalance();
        h1.transferMoney();

        a1.checkBalance();
        a1.transferMoney();
    }
}
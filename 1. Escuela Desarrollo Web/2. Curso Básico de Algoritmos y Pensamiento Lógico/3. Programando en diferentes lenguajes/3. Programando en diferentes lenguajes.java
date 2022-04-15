class Main {
    public static void showSubstring(String text, int start, int end) {
        System.out.println(text.substring(start,end));
    }

    public static void main(String[] args) {
        String text = "Lasfloresazules";
        showSubstring(text, 3, 9);
    }
}
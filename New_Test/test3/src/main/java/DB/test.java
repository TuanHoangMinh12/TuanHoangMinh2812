package DB;

import java.sql.Connection;

public class test {
    public static void main(String[] args) {
        Connection c = JDBConnection.getConnection();
        System.out.println(c);
    }
}

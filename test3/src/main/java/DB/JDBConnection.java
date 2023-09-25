package DB;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBConnection {
    public static Connection  getConnection() {
        Connection c =null;

        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            String url = "jdbc:mySQL://localhost:3306/test1";

            String username = "root";
            String password= "123456789";

            c = DriverManager.getConnection(url,username,password);

        }  catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return c;
    }
    public static  void endConnection(Connection c) {
        if(c != null) {
            try {
                c.close();
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

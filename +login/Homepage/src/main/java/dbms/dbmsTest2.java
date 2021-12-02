package dbms;

import java.sql.Connection;
import java.sql.SQLException;

public class dbmsTest2 {
	public static void main(String[] args) {
		Connection conn = null;
		
		try {
			conn = Util.getConnection();
			conn.setAutoCommit(false);
			System.out.println("연결성공 :" + conn + "<br>");
			conn.commit();			
		} catch(SQLException e) {
			System.out.println("연결실패 :" + e.getMessage() + "<br>");
			Util.rollback(conn);
		} finally {
			Util.close(conn);
		}
	}
}

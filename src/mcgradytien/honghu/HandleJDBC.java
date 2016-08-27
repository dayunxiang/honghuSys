package mcgradytien.honghu;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class HandleJDBC {

	/**
	 * 新建JDBC链接
	 */
	public static Connection getConnection(){
		Connection conn = null;
		//SQLException ex = null;
		try {
			String url = "jdbc:mysql://localhost:3306/honghu?useSSL=false";
			String user = "root";
			String password = "admin";
			
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url,user,password);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			//
		}
		return conn;
	}
	
	/**
	 * 查询
	 */
	public static void dbQuery(){
		Connection conn = getConnection();
		try {
			String sql = "SELECT * FROM userinfo";
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			
			while (rs.next()) {
				//ֵ
				System.out.print(rs.getInt("id")+"  ");
				System.out.print(rs.getString("name")+"  ");
				System.out.print(rs.getString("password")+"  ");
				System.out.print(rs.getString("email")+"  ");
				System.out.println();
			}
			conn.close();
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	/**
	 * 插入
	 */
	public static void dbInsert(){
		Connection conn = getConnection();
		try {
			String sqlInsert = "INSERT INTO test_table(name,password,email)"+"VALUES('Tom','789','Tom@email.com')";
			Statement st = conn.createStatement();
			int count = st.executeUpdate(sqlInsert);
			System.out.println(""+count+"");
			conn.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	/**
	 * 更新
	 */
	public static void dbUpdate(){
		Connection conn = getConnection();
		try {
			String sqlUpdate = "UPDATE  test_table SET email='tom@163.com' name= WHERE name='Tom'" ;
			Statement st = conn.createStatement();
			int count = st.executeUpdate(sqlUpdate);
			System.out.println(""+count+"");
			conn.close();
		} catch (Exception e) {
			//
		}
	}
}
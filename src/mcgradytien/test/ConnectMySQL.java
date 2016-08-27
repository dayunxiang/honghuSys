package mcgradytien.test;

import java.sql.*;

public class ConnectMySQL {
	/**
	 * 建立与mysql的链接
	 */
	public static Connection getConnection() {
		Connection conn = null;
		try {
			String url = "jdbc:mysql://localhost:3306/honghu?useSSL=false";
			String user = "root";
			String password = "admin";

			// 初始化jdbc的mysql的驱动程序
			// 初始化的方法有多种
			// (注册Driver实现对象)
			// 方式1：DriverManager.registerDriver(new com.mysql.jdbc.Driver());
			// 方式2:
			Class.forName("com.mysql.jdbc.Driver");
			// 建立连接
			conn = DriverManager.getConnection(url, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			
		}

		return conn;
	}

}

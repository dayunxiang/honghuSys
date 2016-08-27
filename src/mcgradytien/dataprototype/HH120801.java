package mcgradytien.dataprototype;

public class HH120801 {
	private String ID;
	private String point_N;
	private String point_E;
	private String depth;
	private String temperatur;
	private String pH;
	private String transparen;
	private String Dissoived;
	private String NH4_N;
	private String TN;
	private String TP;
	private String CODMn; 
	
	public HH120801(){
		//
	}
	
	public HH120801(String ID,String point_N, String point_E,String depth,String temperatur,String pH,	String transparen, 
			String Dissoived,String NH4_N,String TN,String TP,String CODMn){
		this.ID = ID;
		this.CODMn = CODMn;
		this.depth = depth;
		this.Dissoived = Dissoived; 
		this.NH4_N = NH4_N;
		this.pH = pH;
		this.point_E = point_E;
		this.point_N = point_N;
		this.temperatur = temperatur;
		this.transparen = transparen;
		this.TP = TP;
		this.TN = TN;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getPoint_N() {
		return point_N;
	}

	public void setPoint_N(String point_N) {
		this.point_N = point_N;
	}

	public String getPoint_E() {
		return point_E;
	}

	public void setPoint_E(String point_E) {
		this.point_E = point_E;
	}

	public String getDepth() {
		return depth;
	}

	public void setDepth(String depth) {
		this.depth = depth;
	}

	public String getTemperatur() {
		return temperatur;
	}

	public void setTemperatur(String temperatur) {
		this.temperatur = temperatur;
	}

	public String getpH() {
		return pH;
	}

	public void setpH(String pH) {
		this.pH = pH;
	}

	public String getTransparen() {
		return transparen;
	}

	public void setTransparen(String transparen) {
		this.transparen = transparen;
	}

	public String getDissoived() {
		return Dissoived;
	}

	public void setDissoived(String dissoived) {
		Dissoived = dissoived;
	}

	public String getNH4_N() {
		return NH4_N;
	}

	public void setNH4_N(String nH4_N) {
		NH4_N = nH4_N;
	}

	public String getTN() {
		return TN;
	}

	public void setTN(String tN) {
		TN = tN;
	}

	public String getTP() {
		return TP;
	}

	public void setTP(String tP) {
		TP = tP;
	}

	public String getCODMn() {
		return CODMn;
	}

	public void setCODMn(String cODMn) {
		CODMn = cODMn;
	}
	
}

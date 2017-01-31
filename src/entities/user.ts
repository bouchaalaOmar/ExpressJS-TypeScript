export class User { 

   //field 
   private login:string;
   private password:string;
   private nom:string;
   private prenom:string;
   private email:string;
   private region:string;
   private adresse:string;
   private tel:number;

   //constructor 
   constructor( login:string,password:string,nom:string,prenom:string, email:string,region:string,adresse:string,tel:number) { 
      this.login=login;
      this.password=password;
      this.nom=nom;
      this.prenom=prenom;
      this.email=email;
      this.region=region;
      this.adresse=adresse;
      this.tel=tel; 
   } 

   //getters and setters

	public get $login(): string {
		return this.login;
	}

	public set $login(value: string) {
		this.login = value;
	}

	public get $password(): string {
		return this.password;
	}

	public set $password(value: string) {
		this.password = value;
	}

	public get $nom(): string {
		return this.nom;
	}

    public set $nom(value: string) {
		this.nom = value;
	}
    
	public get $prenom(): string {
		return this.prenom;
	}

	public set $prenom(value: string) {
		this.prenom = value;
	}

	public get $email(): string {
		return this.email;
	}

	public set $email(value: string) {
		this.email = value;
	}

	public get $region(): string {
		return this.region;
	}

	public set $region(value: string) {
		this.region = value;
	}

	public get $adresse(): string {
		return this.adresse;
	}

	public set $adresse(value: string) {
		this.adresse = value;
	}

	public get $tel(): number {
		return this.tel;
	}

	public set $tel(value: number) {
		this.tel = value;
	}
    

	
   //function 
 
}
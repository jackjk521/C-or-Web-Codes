

    const handleBigInverse = x => {
        const stringX = x.toString();
      
        if (stringX.length > 21) {
          const approximate = Number(stringX.slice(0, 21));
          const e = stringX.length - 21;
      
          const inverse = 1 / approximate;
          const inverseString = inverse.toString();
      
          const splitString = inverseString.split("e");
          splitString[1] = (Number(splitString[1]) - e).toString();
      
          return splitString.join("e");
        } else {
          const inverse = 1 / Number(x);
          return inverse.toString();
        }
      };
      
      const iterativeExpBySqWithMod = (x, n, mod) => {
        let bigX = BigInt(x);
        let bigN = BigInt(n);
      
        if (n < 0) {
          if (!mod || Math.abs(mod) >= 1) {
            return handleBigInverse(iterativeExpBySqWithMod(x, -n));
          } else {
            return (
              handleBigInverse(iterativeExpBySqWithMod(x, -n)) % mod
            ).toString();
          }
        }
        if (mod) {
          const bigMod = BigInt(mod);
          let result = BigInt(1);
      
          while (bigN > 0) {
            if (bigN % BigInt(2) == 1) {
              result = (result * bigX) % bigMod;
            }
            bigX = (bigX * bigX) % bigMod;
            bigN /= BigInt(2);
          }
          return result;
        } else {
          let result = BigInt(1);
          while (bigN > 0) {
            if (bigN % BigInt(2) == 1) {
              result *= bigX;
            }
            bigX *= bigX;
            bigN /= BigInt(2);
          }
          return result;
        }
      };


function rsaEncrypt(p, q, plain){
    let n, c, z, e, d, i, len;
	len = plain.length;
    let encrypt = '';
	
    e = 7;
	d = 223; 
	n = p * q;
	z = (p-1)*(q-1);

	for ( i = 0; i < len; i++){	
		c = iterativeExpBySqWithMod((plain.charCodeAt(i)), e, n);
        // (Math.pow((plain[i].charCodeAt(0)), e) % n);
		encrypt = encrypt.concat(String.fromCharCode(Number(c)));  
	}
	 return encrypt;
}

function rsaDecrypt(p, q, encrypt){
    let n, z, m, i, len;
	len = encrypt.length;
    let decrypt = '';
    let e, d;
	e = 7;
	d = 223;

	n = p * q;
	z = (p-1)*(q-1);
	
	for ( i = 0; i < len; i++){	
		m = iterativeExpBySqWithMod((encrypt.charCodeAt(i)), d, n)
        // (Math.pow((encrypt[i].charCodeAt(0)), d) % n);
		decrypt = decrypt.concat(String.fromCharCode(Number(m))) ;  
	}
	 return decrypt;
}


console.log(rsaEncrypt(11,13, "ENCRYPTION"));
console.log(rsaDecrypt(11,13, "lNYECaHS(N"));
console.log(rsaEncrypt(11,13, "RASTAMAN"));
console.log(rsaDecrypt(11,13, "EAHAMAN"));
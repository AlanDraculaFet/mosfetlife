import {displayError} from "../common.js"

const nickname_input = document.getElementById("nickname");
const password_input = document.getElementById("password");
const email_input = document.getElementById("email");

password_input.onpaste = e => e.preventDefault();

function setError(message) {
	displayError(message);
	password_input.value = "";
}

document.getElementById("submit-button").onclick = e => {
    e.preventDefault();

    let regex = null;

    const nickname = nickname_input.value;
    const email = email_input.value;
    const password = password_input.value;

    if (nickname.length == 0) {
        return setError("Nickname is required");
    }

    if (email.length == 0) {
        return setError("Email is required");
    }

    if (! email.includes("@")) {
        return setError("Email is not valid");
    }

    if (password.length == 0) {
        return setError("Password is required");
    }

    if (password.length < 10) {
        return setError("Password must be at least ten characters");
    }

    if (password === nickname) {
        return setError("Password and nickname must not be the same");
    }

    regex = /[A-Z]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one uppercase letter");
    }

    regex = /[a-z]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one lowercase letter");
    }

    regex = /[0-9]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one digit");
    }

    regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (! regex.test(password)) {
        return setError("Password must contain at least one special character");
    }

    regex = /(ADD|EXCEPT|PERCENT|ALL|EXEC|PLAN|ALTER|EXECUTE|PRECISION|AND|EXISTS|PRIMARY|ANY|EXIT|PRINT|AS|FETCH|PROC|ASC|FILE|PROCEDURE|AUTHORIZATION|FILLFACTOR|PUBLIC|BACKUP|FOR|RAISERROR|BEGIN|FOREIGN|READ|BETWEEN|FREETEXT|READTEXT|BREAK|FREETEXTTABLE|RECONFIGURE|BROWSE|FROM|REFERENCES|BULK|FULL|REPLICATION|BY|FUNCTION|RESTORE|CASCADE|GOTO|RESTRICT|CASE|GRANT|RETURN|CHECK|GROUP|REVOKE|CHECKPOINT|HAVING|RIGHT|CLOSE|HOLDLOCK|ROLLBACK|CLUSTERED|IDENTITY|ROWCOUNT|COALESCE|IDENTITY_INSERT|ROWGUIDCOL|COLLATE|IDENTITYCOL|RULE|COLUMN|IF|SAVE|COMMIT|IN|SCHEMA|COMPUTE|INDEX|SELECT|CONSTRAINT|INNER|SESSION_USER|CONTAINS|INSERT|SET|CONTAINSTABLE|INTERSECT|SETUSER|CONTINUE|INTO|SHUTDOWN|CONVERT|IS|SOME|CREATE|JOIN|STATISTICS|CROSS|KEY|SYSTEM_USER|CURRENT|KILL|TABLE|CURRENT_DATE|LEFT|TEXTSIZE|CURRENT_TIME|LIKE|THEN|CURRENT_TIMESTAMP|LINENO|TO|CURRENT_USER|LOAD|TOP|CURSOR|NATIONAL|TRAN|DATABASE|NOCHECK|TRANSACTION|DBCC|NONCLUSTERED|TRIGGER|DEALLOCATE|NOT|TRUNCATE|DECLARE|NULL|TSEQUAL|DEFAULT|NULLIF|UNION|DELETE|OF|UNIQUE|DENY|OFF|UPDATE|DESC|OFFSETS|UPDATETEXT|DISK|ON|USE|DISTINCT|OPEN|USER|DISTRIBUTED|OPENDATASOURCE|VALUES|DOUBLE|OPENQUERY|VARYING|DROP|OPENROWSET|VIEW|DUMMY|OPENXML|WAITFOR|DUMP|OPTION|WHEN|ELSE|OR|WHERE|END|ORDER|WHILE|ERRLVL|OUTER|WITH|ESCAPE|OVER|WRITETEXT)/
    if (regex.test(password.toUpperCase())) {
        return setError("Password cannot contain an SQL keyword");
    }

    if (password.length > 12) {
        return setError("Password must be less than twelve characters");
    }

    regex = /[ \t]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one space or tab");
    }

    regex = /[a-zA-Z][a-zA-Z][a-zA-Z]/;
    if (regex.test(password)) {
        return setError("Password must not contain a series of three letters");
    }

    regex = /[0-9][0-9][0-9]/;
    if (regex.test(password)) {
        return setError("Password must not contain a series of three digits");
    }

    regex = /[0-9][0-9]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one series of two digits");
    }

    regex = /[A-Z][a-z]/;
    if (regex.test(password)) {
        return setError("Password must not contain a lowercase letter preceded by an uppercase letter");
    }

    regex = /([a-zA-Z0-9])\1+/;
    if (regex.test(password)) {
        return setError("Password must not contain repeated digits or letters");
    }

    regex = /[a-z][A-Z]/;
    if (! regex.test(password)) {
        return setError("Password must contain at least one uppercase letter preceded by a lowercase letter");
    }

    regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    if (! regex.test(password)) {
        return setError("Password must contain at least one emoji");
    }

    regex = /[aeiouAEIOU]/
    if (regex.test(password)) {
        return setError("Password must not contain vowels");
    }

    regex = /[2357]/
    if (regex.test(password)) {
        return setError("Password must not contain prime numbers");
    }

    regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (regex.test(password)) {
        return setError("Password must not contain symbols");
    }
}


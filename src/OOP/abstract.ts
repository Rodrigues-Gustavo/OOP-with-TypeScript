export abstract class Person {
    protected abstract score: number;
    constructor (
        protected name: string,
    ) {}

    public setScore(score: number): void {
        if (score < 0 || score > 900) {
            throw new Error('score invalid')
        }
        this.score = score
    }

    public abstract calcScore(): number;
}

class Student extends Person {
    protected score: number;

    constructor (name: string, score: number) {
        super(name)

        this.score = score
    }
    public calcScore(): number {
        return 0;
    }
}

class Teacher extends Person {
    protected score: number;

    constructor (name: string, score: number) {
        super(name)

        this.score = score
    }

    public calcScore(): number {
        return 0;
    }
}

const student1 = new Student('Carlinhos da massa', 500)
console.log(student1)
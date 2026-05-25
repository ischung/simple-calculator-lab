// 사칙연산 순수 함수 모음 — 같은 입력에 항상 같은 출력, 외부 상태 변경 없음
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function calculate(operator, a, b) {
    const ops = { add, subtract };
    const fn = ops[operator];
    if (!fn) {
        throw new Error(`알 수 없는 연산자: ${operator}`);
    }
    return fn(a, b);
}